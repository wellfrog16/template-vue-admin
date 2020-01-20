const config = [
    {
        id: 1, // 必须要有id=1的数据，否则系统会找不到默认配置
        name: '本地服务器1 - localhost',
        server: {
            api: 'http://127.0.0.1:7001',
            easyMock: 'https://easy-mock.com/mock/5d2f616fef6cae58e9f2d26f/template',
            upload: 'http://127.0.0.1:8001/service/file/upload',
            image: 'http://localhost:5000',
        },
    },
    {
        id: 2,
        name: '本地服务器2 - localhost',
        server: {
            api: 'http://127.0.0.1:7001',
            easyMock: 'https://easy-mock.com/mock/5d2f616fef6cae58e9f2d26f/template',
            upload: 'http://127.0.0.1:8001/service/file/upload',
            image: 'http://localhost:5000',
        },
    },
];

export default config;
