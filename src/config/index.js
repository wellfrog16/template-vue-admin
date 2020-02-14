import { PAGE, PAGE_SIZE, STORAGE_SERVER } from '@/helper/constant';
import { _ } from '@/utils/cdn';
import { storage } from '@/utils/rivers';
import devConfig from './dev';
import prodConfig from './prod';
// 基础配置，一些默认设置

const settings = {
    page: {
        [PAGE]: 1,
        [PAGE_SIZE]: 30,
    },
    uploadName: 'avatar',
};

const serverId = storage.get(STORAGE_SERVER) || 1;

// 深度合并
const config = process.env.NODE_ENV === 'production'
    ? _.merge(settings, prodConfig)
    : _.merge(settings, devConfig);

export const server = config.servers.find((s) => s.id === serverId);

export default config;
