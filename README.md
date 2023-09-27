# 前端枚举工具 | Enum

## 安装

```shell
npm install @fengjian/enum
```

## 使用

```js
import Enum from '@fengjian/enum';

const GENDER = new Enum([
    ['MAN', '1', '男', { alias: '男人' }],
    ['WOMAN', '0', '女', { alias: '女人' }],
]);

console.log('GENDER.WOMAN ===>', GENDER.WOMAN); // "0"
console.log('GENDER.MAN ===>', GENDER.MAN); // "1"

console.log('GENDER.WOMAN_DESC ===>', GENDER.WOMAN_DESC); // "女"
console.log('GENDER.MAN_LABEL ===>', GENDER.MAN_LABEL); // "男"

console.log('GENDER[GENDER.WOMAN] ===>', GENDER[GENDER.WOMAN]); // "女"
console.log('GENDER["0"] ===>', GENDER['0']); // "女"
console.log('GENDER[GENDER.MAN] ===>', GENDER[GENDER.MAN]); // "男"
console.log('GENDER["1"] ===>', GENDER["1"]); // "男"

console.log('GENDER.keys ===>', GENDER.keys); // ["WOMAN", "MAN"];
console.log('GENDER.values ===>', GENDER.values); // ["0", "1"];
console.log('GENDER.labels ===>', GENDER.labels); // ["女", "男"];

console.log('GENDER.OPTIONS ===>', GENDER.OPTIONS); // [{ key: 'MAN', value: '1', label: '男' }, { key: 'WOMAN', value: '0', label: '女' }];

console.log('GENDER.MAN_ALIAS ===>', GENDER.MAN_ALIAS); // "男人"
console.log('GENDER.WOMAN_ALIAS ===>', GENDER.WOMAN_ALIAS); // "女人"
```

## 后续规划

[ ] 编写习惯配置(支持大小写值、驼峰命名、SnakeCase命名)
