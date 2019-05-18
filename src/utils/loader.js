// 加载js文件，未完成
// todo
// 1、如当前页面已经存在，则不加载
// 2、实现按库名加载对应的js和css

/**
 * 加载js文件
 *
 * @param {String} url
 * @returns
 */
function loadScript(url) {
    return new Promise((resolve, reject) => {
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
        script.onerror = reject;
        head.appendChild(script);
    });
}

/**
 * 加载css
 *
 * @param {String} url
 */
function loadCss(url) {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
}

export default {
    loadScript,
    loadCss,
};
