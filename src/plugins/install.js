export default function(com, name) {
    const Plugin = {};

    Plugin.install = (Vue, options) => {
    if (Plugin.install.installed) return;

    com.options = options || {};
        Vue.component(name, com);
    };

    if (typeof window !== 'undefined' && window.Vue) {
        Plugin.install(window.Vue);
    }

    return Plugin;
}
