import { ClipboardJS } from '@/utils/cdn';

export default {
    bind(el, binding) {
        if (binding.arg === 'success') {
            el.clipboardSuccess = binding.value;
        } else if (binding.arg === 'error') {
            el.clipboardError = binding.value;
        } else {
            const clipboard = new ClipboardJS(el, {
                text() { return binding.value; },
                action() { return binding.arg === 'cut' ? 'cut' : 'copy'; },
            });
            clipboard.on('success', (e) => {
                const callback = el.clipboardSuccess;
                callback && callback(e);
            });
            clipboard.on('error', (e) => {
                const callback = el.clipboardError;
                callback && callback(e);
            });
            el.clipboard = clipboard;
        }
    },
    update(el, binding) {
        if (binding.arg === 'success') {
            el.clipboardSuccess = binding.value;
        } else if (binding.arg === 'error') {
            el.clipboardError = binding.value;
        } else {
            el.clipboard.text = () => binding.value;
            el.clipboard.action = () => (binding.arg === 'cut' ? 'cut' : 'copy');
        }
    },
    unbind(el, binding) {
        if (binding.arg === 'success') {
            delete el.clipboardSuccess;
        } else if (binding.arg === 'error') {
            delete el.clipboardError;
        } else {
            el.clipboard.destroy();
            delete el.clipboard;
        }
    },
};
