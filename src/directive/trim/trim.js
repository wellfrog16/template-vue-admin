export default {
    bind(el, binding) {
        function blurHandler() {
            const { target, key } = binding.value;
            target[key] = target[key].trim();
        }

        const elInput = el.querySelector('input');
        if (elInput) {
            elInput.vueTrimBlur = blurHandler;
            elInput.addEventListener('blur', blurHandler);
        } else {
            throw new Error('need input');
        }
    },
    unbind(el) {
        const elInput = el.querySelector('input');
        elInput && elInput.removeEventListener('blur', el.blurHandler);
        delete el.blurHandler;
    },
};
