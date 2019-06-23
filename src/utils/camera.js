function success(that, stream) {
    const { video } = that;

    if (video) {
        video.srcObject = stream;
        video.play();
        that.successCallback && that.successCallback(video);
    }
}

function error(that, err) {
    that.successCallback && that.successCallback(err);
    throw new Error(`访问用户媒体设备失败${err.name}, ${err.message}`);
}

class Camera {
    constructor(video, option) {
        const param = Object.assign({
            width: 480,
            height: 320,
            successCallback: () => {},
            errorCallback: () => {},
        }, option);
        this.video = video;
        this.constraints = { video: { width: param.width, height: param.height } };
        this.canvas = param.canvas;
        this.successCallback = param.successCallback;
        this.errorCallback = param.errorCallback;
    }

    static isSupport() {
        if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
            return true;
        }
        return false;
    }

    getUserMedia(successCb, errorCb) {
        const { constraints } = this;

        if (navigator.mediaDevices.getUserMedia) {
            // 最新的标准API
            navigator.mediaDevices.getUserMedia(constraints).then(successCb).catch(errorCb);
        } else if (navigator.webkitGetUserMedia) {
            // webkit核心浏览器
            navigator.webkitGetUserMedia(constraints, successCb, errorCb);
        } else if (navigator.mozGetUserMedia) {
            // firfox浏览器
            navigator.mozGetUserMedia(constraints, successCb, errorCb);
        } else if (navigator.getUserMedia) {
            // 旧版API
            navigator.getUserMedia(constraints, successCb, errorCb);
        }
    }

    start() {
        if (this.constructor.isSupport()) {
            this.getUserMedia(
                (stream) => { success(this, stream); },
                (err) => { error(this, err); },
            );
        } else {
            throw new Error('不支持访问用户媒体');
        }
    }

    stop() {
        const { video } = this;
        video.pause();

        if (video.srcObject) {
            video.srcObject.getVideoTracks()[0].stop();
            video.srcObject = null;
        }
    }

    shot() {
        const { canvas, video, constraints } = this;
        const { width, height } = constraints.video;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, width, height);
    }
}

export default Camera;
