import { $ } from '@/utils/cdn';
import devConfig from './dev';
import prodConfig from './prod';
// 基础配置，一些默认设置

const settings = {
    pagesize: 10,
    uploadName: 'avatar',
};

// 借助jquery进行深度复制和合并
const config = process.env.NODE_ENV === 'production'
    ? $.extend(true, settings, prodConfig)
    : $.extend(true, settings, devConfig);

export default config;
