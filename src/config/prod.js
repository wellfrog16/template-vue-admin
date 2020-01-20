// 此文件格式需和dev.js保持一致

const config = {
    serverVisible: true,
    servers: [
        {
            id: 1, // 必须要有id=1的数据，否则系统会找不到默认配置
            name: '本地服务器1 - localhost',
            server: {
                api: 'localhost:8080',
                easyMock: 'https://easy-mock.com/mock/5d2f616fef6cae58e9f2d26f/template',
                upload: 'localhost:8080',
                image: 'localhost:8080',
            },
        },
        {
            id: 2,
            name: '本地服务器2 - localhost',
            server: {
                api: 'localhost:8080',
                easyMock: 'https://easy-mock.com/mock/5d2f616fef6cae58e9f2d26f/template',
                upload: 'localhost:8080',
                image: 'localhost:8080',
            },
        },
    ],
};

export default config;
