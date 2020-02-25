export default {
    // 接受的文件格式
    accept: { type: String, default: '.jpg,.jpeg,.png' },

    // 显示类型，image | button
    type: { type: String, default: 'image' },

    // 图片地址
    src: { type: String, default: '' },

    // 图片大小限制，默认最大2M
    maxSize: { type: Number, default: 2 * 1024 * 1024 },

    // 图片显示风格，todo: 校验
    fit: { type: String, default: 'contain' },

    // 组件宽
    width: { type: String, default: '200px' },

    // 组件高
    height: { type: String, default: '200px' },

    // icon的fontsize
    iconSize: { type: Number, default: 28 },

    // 自定义上传
    httpRequest: { type: Function },

    // 上传前回调，return false中止上传
    beforeUpload: { type: Function },
};
