export default {
    bind(el, binding) {
        function clickHandler(e) {
            !el.contains(e.target) && binding.value(e);
        }

        el.vueOutsideClick = clickHandler;
        document.addEventListener('click', clickHandler);
    },
    unbind(el) {
        document.removeEventListener('click', el.vueOutsideClick);
        delete el.vueOutsideClick;
    },
};
