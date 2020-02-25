// 加载js文件

function isScriptLoaded(url) {
    const script = url && document.querySelector(`script[src="${url}"]`);
    return script && script.dataset.loader === 1;
}

function getScript(url) {
    const script = url && document.querySelector(`script[src="${url}"]`);
    return script && !script.dataset.loader ? script : null;
}

function isCssLoaded(url) {
    return url && document.querySelector(`link[href="${url}"]`);
}

/**
 * 加载js文件
 *
 * @param {String} url
 * @returns
 */
function loadScript(urls) {
    return Promise.all(urls.map(url => new Promise((resolve, reject) => {
        // 如果已经加载，直接返回
        if (isScriptLoaded(url)) { resolve(); } else {
            const myScript = getScript(url);

            // （非）多个程序同时加载同一个cdn资源
            if (!myScript) {
                const head = document.getElementsByTagName('head')[0];
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = url;
                if (script.readyState) {
                    script.onreadystatechange = () => {
                        if (script.readyState === 'loaded' || script.readyState === 'complete') {
                            script.onreadystatechange = null;
                            script.dataset.loaded = 1;
                            resolve();
                        }
                    };
                } else {
                    script.onload = () => {
                        script.dataset.loaded = 1;
                        resolve();
                    };
                }

                // 加载失败删除标签，并返回reject
                script.onerror = () => {
                    head.removeChild(script);
                    reject();
                };
                head.appendChild(script);
            } else { // 多个程序同时加载同一个cdn资源，则用计时器检测loader状态
                const timeout = 3000; // 检测超时上限
                const interval = 10; // 检测频率
                let times = 0; // 已用时
                let timer = null; // setInterval

                timer = setInterval(() => {
                    times += interval;

                    // 加载超时
                    if (times >= timeout) {
                        clearInterval(timer);
                        reject(new Error('time out!'));
                    }

                    if (+myScript.dataset.loaded === 1) {
                        clearInterval(timer);
                        resolve();
                    }
                }, interval);
            }
        }
    })));
}

/**
 * 加载css
 *
 * @param {String} url
 */
function loadCss(urls) {
    const head = document.getElementsByTagName('head')[0];
    urls.filter(url => !isCssLoaded(url))
        .forEach(url => {
            const link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.href = url;
            head.appendChild(link);
        });
}

export default {
    loadScript,
    loadCss,
};
