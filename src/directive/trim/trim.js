export default {
    bind(el, binding) {
        function blurHandler() {
            const { target, key } = binding.value;
            target[key] = target[key].trim();
        }

        const elInput = el.querySelector('input') || el.querySelector('textarea');
        if (elInput) {
            elInput.vueTrimBlur = blurHandler;
            elInput.addEventListener('blur', blurHandler);
        } else {
            throw new Error('need input or textarea');
        }
    },
    unbind(el) {
        const elInput = el.querySelector('input') || el.querySelector('textarea');
        elInput && elInput.removeEventListener('blur', el.blurHandler);
        delete el.blurHandler;
    },
};
