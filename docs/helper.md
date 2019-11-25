# helper 辅助函数

> 与项目有耦合性，用于处理项目数据的函数。还包括引用了与项目或框架有关的文件的函数<br>
> 文件路径：src/pages/index/helper/index.js

### site()

* <b>返回值</b> `{Json}` 站点属性，详细内容如下

|名称|类型|说明
|:-|:-|:-
|accountId|Number/String|账户id
|accountName|String|账户名称
|roles|Array|角色列表
|accessToken|String|oauth2的accessToken
|refreshToken|String|oauth2的refreshToken
|headers|Json|
|headers.Authorization|String|token信息
|destroy|Function|清空站点信息

* <b>用法</b><br>
登录后获取登录人员信息等。也可以在登录时保存其他相关信息以便调用

### restful(axios, base)

* <b>参数</b>
    * {Axios} `axios` // axios实例
    * {String} `base` // 请求接口的基础路径

* <b>返回值</b><br>
包含 `{ insert, update, detail, remove }` 的标准restful请求

* <b>用法</b>

```javascript
import instance from '@/helper/axios';
import helper from '@/helper/index';

const axios = instance();
const myRestful = helper.restful(axios, 'book');

// myRestful包含增删改查的restful请求，内容等同于
// const insert = params => axios.post(base, params);
// const update = (id, params) => axios.pust(`${base}/${id}`, params);
// const detail = id => axios.get(`${base}/${id}`);
// const remove = id => axios.delete(`${base}/${id}`);

export default {
    ...myRestful,
};
```