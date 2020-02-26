export const imageOptions = {
    width: '100px', // 组件宽
    height: '100px', // 组件高
    src: '', // 图片地址
    fit: 'cover', // 图片显示风格
    icon: 'el-icon-plus', // 默认icon
    iconSize: 28, // icon的fontsize
};

export const buttonOptions = {
    icon: 'el-icon-upload', // 默认icon
    type: 'primary',
    size: '', // 按钮尺寸
    text: '上传图片',
};

export default {
    // 接受的文件格式
    accept: { type: String, default: '.jpg,.jpeg,.png' },

    // 显示类型，image | button
    type: { type: String, default: 'image' },

    // 类型是image时的option
    imageOptions: {
        type: Object,
        default: () => (imageOptions),
    },

    // 类型是button时的option
    buttonOptions: {
        type: Object,
        default: () => (buttonOptions),
    },

    // 图片大小限制，默认最大2M
    maxSize: { type: Number, default: 2 * 1024 * 1024 },

    // 自定义上传
    httpRequest: { type: Function },

    // 上传前回调，return false中止上传
    beforeUpload: { type: Function },
};
