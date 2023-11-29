# 前端枚举工具 | Enum

一个简单的定义枚举用具，迫于以往定义时的折磨。

**之前**

```js
// 定义时
const TYPE_ENUM = {
    MALL: 1, // 商场
    BUILDING: 2, // 写字楼
};
const TYPE_ENUM_LABEL = {
    [TYPE_ENUM.MALL]: '商场',
    [TYPE_ENUM.BUILDING]: '写字楼',
};
const TYPE_ENUM_ALIAS = {
    [TYPE_ENUM.MALL]: '商圈',
    [TYPE_ENUM.BUILDING]: '写字楼群',
};

// 使用时
const remoteValue = 1;
// 显示文案
const text = TYPE_ENUM_LABEL[remoteValue];
// 逻辑判断
if (remoteValue === TYPE_ENUM.MALL)
// 转为下拉数据（这里可以用一个工厂函数来处理，但是需要注意排序问题）
// [对象属性的顺序](https://juejin.cn/post/6844903796062191624)
const options = [
    { 
        key: 'MALL',
        label: TYPE_ENUM_LABEL[TYPE_ENUM.MALL], 
        value: TYPE_ENUM.MALL, 
        alias: TYPE_ENUM_ALIAS[TYPE_ENUM.MALL] 
    },
    {
        key: 'BUILDING',
        label: TYPE_ENUM_LABEL[TYPE_ENUM.BUILDING], 
        value: TYPE_ENUM.BUILDING, 
        alias: TYPE_ENUM_ALIAS[TYPE_ENUM.BUILDING] 
    }
];
```

**现在**

```js
// 定义时
const TYPE_ENUM = new Enum([
    ['MALL', 1, '商场', { alias: '商圈' }],
    ['BUILDING', 2, '写字楼', { alias: '写字楼群' }],
])

// 使用时
const remoteValue = 1;
// 显示文案
const text = TYPE_ENUM[remoteValue];
// 逻辑判断
if (remoteValue === TYPE_ENUM.MALL)
// 转为下拉数据（与定义时顺序一致）
const options = TYPE_ENUM.OPTIONS; // [{ key: 'MALL', label: '商场', value: 1, extData: { alias: '商圈' } }, { key: 'BUILDING', label: '写字楼', value: 2, extData: { alias: '写字楼群' } }];
```

## 安装

```shell
npm install simplenum
```

## 使用

### 直接使用

```js
import Enum from 'simplenum';

const TYPE_ENUM = new Enum([
    ['MALL', 1, '商场', { alias: '商圈' }],
    ['BUILDING', 2, '写字楼', { alias: '写字楼群' }],
])

TYPE_ENUM.MALL; // 1
TYPE_ENUM[1]; // 商场
TYPE_ENUM.MALL_LABEL; // 商场
TYPE_ENUM.MALL_ALIAS; // 商圈
TYPE_ENUM['1_ALIAS']; // 商圈
TYPE_ENUM.MALL_EXTDATA; // { alias: '商圈' }
TYPE_ENUM.MALL_EXTDATA.alias; // 商圈

TYPE_ENUM.keys; // ['MALL', 'BUILDING']
TYPE_ENUM.values; // [1, 2]
TYPE_ENUM.labels; // ['商场', '写字楼']
TYPE_ENUM.OPTIONS; // [{ key: 'MALL', label: '商场', value: 1, extData: { alias: '商圈' } }, { key: 'BUILDING', label: '写字楼', value: 2, extData: { alias: '写字楼群' } }];
```

![](https://gitee.com/meetthebest/picgoImages/raw/master/img/202311291637509.png)

### 配置项

```js
import Enum from 'simplenum';

Enum.defineConfig({
    useUpper: false,
    labelFieldName: ['CUSTOM_LABEL'],
    optionLabelFieldName: 'customLabel',
    optionValueFieldName: 'customValue'
});

const TYPE_ENUM = new Enum([
    ['MALL', 1, '商场', { alias: '商圈' }],
    ['BUILDING', 2, '写字楼', { alias: '写字楼群' }],
])

TYPE_ENUM.mall; // 1
TYPE_ENUM[1]; // 商场
TYPE_ENUM.mall_custom_label; // 商场
TYPE_ENUM.mall_alias; // 商圈
TYPE_ENUM['1_alias']; // 商圈
TYPE_ENUM.mall_extdata; // { alias: '商圈' }
TYPE_ENUM.mall_extdata.alias; // 商圈

TYPE_ENUM.keys; // ['MALL', 'BUILDING']
TYPE_ENUM.values; // [1, 2]
TYPE_ENUM.labels; // ['商场', '写字楼']
TYPE_ENUM.OPTIONS; // [{ key: 'MALL', customLabel: '商场', customValue: 1, extData: { alias: '商圈' } }, { key: 'BUILDING', customLabel: '写字楼', customValue: 2, extData: { alias: '写字楼群' } }];
```

![](https://gitee.com/meetthebest/picgoImages/raw/master/img/202311291643742.png)

## 本地开发

```shell
npm install 
npm run dev
# 访问 http://127.0.0.1:5173/
```

## 后续规划

- [x] 支持不同的代码风格（目前是 upper snake case）
- [ ] 使用层面，暂时没有得到编辑器的友好提示
