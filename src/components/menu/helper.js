export function isHiddenItem(item) {
    return !item.meta ? false : (item.meta.hidden || item.meta.visible === false);
}

export function isHiddenChildren(item) {
    let isHidden = false;
    if (item.children && item.children.length > 0) {
        isHidden = item.children.every(item1 => item1.meta && (item1.meta.hidden || item1.meta.visible === false));
    }
    return isHidden;
}
