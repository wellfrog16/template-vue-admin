// auth2相关
import { storage } from '@/utils/rivers';

const key = 'token';

function get() {
    return storage.get(key);
}

function set(token) {
    return storage.set(key, token, { expires: 60 * 60 * 24 });
}

function remove() {
    return storage.remove(key);
}

export default {
    get,
    set,
    remove,
};
