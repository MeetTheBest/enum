import Enum from '../src/index';

// 常规使用
const GENDER = new Enum([
    ['MAN', '1', '男'],
    ['WOMAN', '0', '女'],
]);
console.log('GENDER ===>', GENDER);

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

// 测试 OPTIONS
const TEST_ENUM = new Enum([
    ['M1', 'M1'],
    ['M2', 'M2'],
    ['2', '2'],
    ['1', '1'],
]);

console.log('TEST_ENUM.OPTIONS ===>', TEST_ENUM.OPTIONS); // [{ key: 'WOMAN', value: '0', label: '女' }, { key: 'MAN', value: '1', label: '男' }];

// 测试 extData
const TEST_EXT_DATA_ENUM = new Enum()
    .setItem('MAN', '1', '男', { alias: '男人', desc: '男人' })
    .setItem('WOMAN', '0', '女', { alias: '女人', desc: '女人' });

console.log('TEST_EXT_DATA_ENUM.MAN_ALIAS ===>', TEST_EXT_DATA_ENUM.MAN_ALIAS); // "男人"
console.log('TEST_EXT_DATA_ENUM.WOMAN_ALIAS ===>', TEST_EXT_DATA_ENUM.WOMAN_ALIAS); // "女人"

console.log('TEST_EXT_DATA_ENUM.man_desc ===>', TEST_EXT_DATA_ENUM.man_desc); // "男人"
console.log('TEST_EXT_DATA_ENUM.woman_desc ===>', TEST_EXT_DATA_ENUM.woman_desc); // "女人"