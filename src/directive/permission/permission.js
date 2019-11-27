import index from '#index/store';

const store = {
    index,
};

export default {
    inserted(el, binding) {
        const { value } = binding;
        if (binding.arg === 'module') {
            el.module = value;
        } else {
            const module = el.module || 'index';
            const roles = store[module].getters.roles || [];

            if (value && value instanceof Array && value.length > 0) {
                const permissionRoles = value;
                const hasPermission = roles.some((role) => permissionRoles.includes(role));

                if (!hasPermission) {
                    el.parentNode && el.parentNode.removeChild(el);
                }
            } else {
                throw new Error('need roles! Like v-permission="[\'admin\',\'editor\']"');
            }
        }
    },
};
