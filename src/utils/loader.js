// 加载js文件，未完成
// todo
// 1、如当前页面已经存在，则不加载
// 2、实现按库名加载对应的js和css

function isLoaded(url) {
    // const script = url && document.querySelector("script[src='" + url + "']");
    return url && document.querySelector(`script[src="${url}"]`);
}

/**
 * 加载js文件
 *
 * @param {String} url
 * @returns
 */
function loadScript(urls) {
    return Promise.all(urls.map((url) => new Promise((resolve, reject) => {
        // 如果已经加载，直接返回
        if (isLoaded(url)) { resolve(); } else {
            const head = document.getElementsByTagName('head')[0];
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            if (script.readyState) {
                script.onreadystatechange = () => {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                        script.onreadystatechange = null;
                        resolve();
                    }
                };
            } else {
                script.onload = resolve;
            }

            // 加载失败删除标签，并返回reject
            script.onerror = () => {
                head.removeChild(script);
                reject();
            };
            head.appendChild(script);
        }
    })));
}

/**
 * 加载css
 *
 * @param {String} url
 */
function loadCss(fn, url) {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);

    // const t = document.createStyleSheet;
    // const r = t ? 'rules' : 'cssRules';
    // const s = t ? 'styleSheet' : 'sheet';
    // const l = document.getElementsByTagName('link');
    // // passed url or last url node
    // url || (url = l[l.length - 1]);
    // function check() {
    //     try {
    //         return url && url[s] && url[s][r] && url[s][r][0];
    //     } catch (e) {
    //         return false;
    //     }
    // }
    // (function poll() {
    //     (check() && setTimeout(fn, 0)) || setTimeout(poll, 100);
    // }());
}

export default {
    loadScript,
    loadCss,
};
