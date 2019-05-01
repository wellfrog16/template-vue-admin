function createFrame(width, height, cls) {
    const iframe = document.createElement('iframe');
    iframe.className = cls;
    iframe.style.width = width;
    iframe.style.height = height;
    iframe.style.display = 'block';
    iframe.style.visibility = 'hidden';
    iframe.style.border = '0';
    iframe.style.position = 'relative';
    iframe.style.zIndex = '-99';
    return iframe;
}

function removeFrame(el, frame) {
    const iframe = el.querySelector(`.${frame}Resize`);
    // doucment消失了，无法remove resize
    // iframe.contentWindow.removeEventListener('resize');
    // 防止某些情况拿不到iframe
    if (iframe) {
        iframe.onload = null;
        el.removeChild(iframe);
    }
}

export default {
    bind(el, binding) {
        // 设定延迟
        if (binding.arg === 'delay') {
            el.delay = binding.value;
            return;
        }
        const widthFrame = createFrame('100%', 0, 'widthFrameResize');
        el.appendChild(widthFrame);

        const heightFrame = createFrame(0, '100%', 'heightFrameResize');
        el.appendChild(heightFrame);

        // 记录元素当前宽高
        let { offsetWidth, offsetHeight } = el;

        // iframe 大小变化时的回调函数
        function sizeChange() {
            const { offsetWidth: width, offsetHeight: height } = el;

            // 不一致时触发回调函数，并更新元素当前宽高
            if (width !== offsetWidth || height !== offsetHeight) {
                binding.value(
                    { width, height },
                    { width: offsetWidth, height: offsetHeight },
                );
                offsetWidth = width;
                offsetHeight = height;
            }
        }

        // 设置延迟用于节流
        let timer = 0;
        const delay = el.delay || 0;

        widthFrame.onload = () => {
            ({ offsetWidth } = el);
            widthFrame.contentWindow.addEventListener('resize', () => {
                clearTimeout(timer);
                timer = setTimeout(sizeChange, delay);
            });
        };

        heightFrame.onload = () => {
            ({ offsetHeight } = el);
            heightFrame.contentWindow.addEventListener('resize', () => {
                clearTimeout(timer);
                timer = setTimeout(sizeChange, delay);
            });
        };
    },
    unbind(el, binding) {
        if (binding.arg === 'delay') {
            delete el.delay;
        } else {
            removeFrame(el, 'widthFrame');
            removeFrame(el, 'heightFrame');
        }
    },
};
