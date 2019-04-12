export default {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: (el) => {
        // 聚焦元素
        el.focus();
    },
};
