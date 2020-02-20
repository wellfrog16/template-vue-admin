import Vue from 'vue';
import VueI18n from 'vue-i18n'; // 多语言

Vue.use(VueI18n);

export const i18n = new VueI18n({ locale: 'null' });
const loadedLanguages = []; // 我们的预装默认语言

/**
 * 设置语言
 *
 * @param {string} lang 语言名字
 * @returns
 */
function setI18nLanguage(lang) {
    const elHtml = document.querySelector('html');
    elHtml.setAttribute('lang', lang);

    // 更新className
    elHtml.classList.remove(i18n.locale);
    elHtml.classList.add(lang);

    // 更新store
    const { $store } = window.vueIndex;
    $store && $store.commit('setState', { lang });

    // 设置语言
    i18n.locale = lang;

    // 保存语言设置
    localStorage.setItem('lang', lang);
    return lang;
}

/**
 * 获取当前将要设置的语言
 *
 * @returns 语言
 */
export function getLanguage() {
    let lang = 'zh-CN'; // 默认语言

    // 地址栏获取
    const matches = window.location.href.match(/[?&]lang=([a-zA-Z-]+)($|#|&)/);
    if (matches) {
        [, lang] = matches;
        return lang;
    }

    // storage获取
    const storageLang = localStorage.getItem('lang');
    if (storageLang) {
        lang = storageLang;
        return lang;
    }

    // 根据浏览器语言
    // lang = navigator.language !== 'zh-CN' ? 'en-US' : 'zh-CN';

    return lang;
}

/**
 * 异步加载语言
 *
 * @export
 * @param {string} lang 语言名字
 * @returns
 */
export function loadLanguageAsync(lang) {
    if (lang && i18n.locale !== lang) {
        if (!loadedLanguages.includes(lang)) {
            return import(/* webpackChunkName: "lang-[request]" */ `./lang/${lang}`).then(msgs => {
                i18n.setLocaleMessage(lang, msgs.default);
                loadedLanguages.push(lang);
                return setI18nLanguage(lang);
            });
        }
        return Promise.resolve(setI18nLanguage(lang));
    }
    return Promise.resolve(lang);
}

export default VueI18n;
