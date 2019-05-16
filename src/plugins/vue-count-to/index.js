import CountTo from './index.vue';

const Plugin = {};

Plugin.install = (Vue) => {
  if (Plugin.install.installed) return;

  Vue.component('vue-count-to', CountTo);
};

if (typeof window !== 'undefined' && window.Vue) {
  Plugin.install(window.Vue);
}

export default Plugin;
