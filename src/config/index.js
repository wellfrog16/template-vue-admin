import { PAGE, PAGE_SIZE } from '@/helper/constant';
import devConfig from './dev';
import prodConfig from './prod';
import { _ } from '@/utils/cdn';
// 基础配置，一些默认设置

const settings = {
    page: {
        [PAGE]: 1,
        [PAGE_SIZE]: 30,
    },
    uploadName: 'avatar',
};

// 借助jquery进行深度复制和合并
const config = process.env.NODE_ENV === 'production'
    ? _.merge(settings, prodConfig)
    : _.merge(settings, devConfig);

export default config;
