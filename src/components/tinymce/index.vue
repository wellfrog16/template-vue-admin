<template>
    <div :class="{fullscreen:fullscreen}" class="tinymce-container editor-container">
        <textarea :id="tinymceId" class="tinymce-textarea" />
        <uploadImage :visible="uploadImageVisible" @visible="handleUploadImage" @on-success="imageUploadSuccess"/>
    </div>
</template>

<script>
import uploadImage from './components/uploadImage.vue';
import config from './config';

export default {
    name: 'Tinymce',
    components: { uploadImage },
    props: {
        id: {
            type: String,
            default() {
                return `vue-tinymce-${+new Date()}${(Math.random() * 1000).toFixed(0)}`;
            },
        },
        value: { type: String, default: '' },
        config: { type: String, default: 'mini' },
        height: { type: Number, required: false, default: 360 },
    },
    data() {
        return {
            uploadImageVisible: false,
            hasChange: false,
            hasInit: false,
            tinymceId: this.id,
            fullscreen: false,
            languageTypeList: {
                en: 'en',
                zh: 'zh_CN',
            },
        };
    },
    computed: {
        language() {
            // return this.languageTypeList[this.$store.getters.language];
            return this.languageTypeList.zh;
        },
    },
    watch: {
        value(val) {
            if (!this.hasChange && this.hasInit) {
                this.$nextTick(() => window.tinymce.get(this.tinymceId).setContent(val || ''));
            }
        },
        language() {
            this.destroyTinymce();
            this.$nextTick(() => this.initTinymce());
        },
    },
    mounted() {
        this.initTinymce();
    },
    activated() {
        this.initTinymce();
    },
    deactivated() {
        this.destroyTinymce();
    },
    destroyed() {
        this.destroyTinymce();
    },
    methods: {
        // 上传图片显示控制
        handleUploadImage(val) {
            this.uploadImageVisible = val;
        },
        initTinymce() {
            const self = this;
            window.tinymce.init({
                ...config[this.config], // 插件、菜单等配置信息
                language: this.language, // 语言
                selector: `#${this.tinymceId}`, // 容器
                height: this.height,
                width: '100%',
                // body_class: 'panel-body', // 编辑器iframe中body的类名
                object_resizing: 'img', // 仅允许图片调整大小
                end_container_on_empty_block: true, // 例：在空p标签里按回车，会拆分成两个p标签
                powerpaste_word_import: 'clean', // 当从word中复制黏贴时，清理黏贴的内容
                advlist_bullet_styles: 'square', // 无序列表仅允许原点
                advlist_number_styles: 'default', // 有序列表仅允许数字
                // imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
                default_link_target: '_blank', // 设置外链默认打开新窗口
                link_title: false, // 取消链接的title设置，默认不设置，为空
                nonbreaking_force_tab: true, // 允许用户按下tab键时，插入3个空格

                init_instance_callback: (editor) => {
                    if (self.value) {
                        editor.setContent(self.value);
                    }
                    self.hasInit = true;
                    editor.on('NodeChange Change KeyUp SetContent', () => {
                        this.hasChange = true;
                        this.$emit('input', editor.getContent());
                    });
                },

                setup(editor) {
                    // editor.on('FullscreenStateChanged', (e) => {
                    //     self.fullscreen = e.state;
                    // });

                    /* Basic button that just inserts the date */
                    editor.ui.registry.addButton('uploadImage', {
                        text: '上传图片',
                        // tooltip: 'Insert Current Date',
                        onAction() {
                            self.uploadImageVisible = true;
                        },
                    });
                },
                // 整合七牛上传
                // images_dataimg_filter(img) {
                //   setTimeout(() => {
                //     const $image = $(img);
                //     $image.removeAttr('width');
                //     $image.removeAttr('height');
                //     if ($image[0].height && $image[0].width) {
                //       $image.attr('data-wscntype', 'image');
                //       $image.attr('data-wscnh', $image[0].height);
                //       $image.attr('data-wscnw', $image[0].width);
                //       $image.addClass('wscnph');
                //     }
                //   }, 0);
                //   return img
                // },
                // images_upload_handler(blobInfo, success, failure, progress) {
                //   progress(0);
                //   const token = self.$store.getters.token;
                //   getToken(token).then(response => {
                //     const url = response.data.qiniu_url;
                //     const formData = new FormData();
                //     formData.append('token', response.data.qiniu_token);
                //     formData.append('key', response.data.qiniu_key);
                //     formData.append('file', blobInfo.blob(), url);
                //     upload(formData).then(() => {
                //       success(url);
                //       progress(100);
                //     })
                //   }).catch(err => {
                //     failure('出现未知问题，刷新页面，或者联系程序员')
                //     console.log(err);
                //   });
                // },
            });
        },
        destroyTinymce() {
            const tinymce = window.tinymce.get(this.tinymceId);
            this.fullscreen && tinymce.execCommand('mceFullScreen');
            tinymce && tinymce.destroy();
        },
        setContent(value) {
            window.tinymce.get(this.tinymceId).setContent(value);
        },
        getContent() {
            window.tinymce.get(this.tinymceId).getContent();
        },
        imageUploadSuccess(arr) {
            const self = this;
            arr.forEach((v) => {
                window.tinymce.get(self.tinymceId).insertContent(`<img src="${v.url}" >`);
            });
        },
    },
};
</script>

<style scoped>
.tinymce-container {
    position: relative;
    line-height: normal;
    width: 100%;
}

.tinymce-container >>> .mce-fullscreen {
    z-index: 10000;
}

.tinymce-textarea {
    visibility: hidden;
    z-index: -1;
}
</style>
