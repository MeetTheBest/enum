<template>
	<div class="page">
		<div class="left">
			<a-form :model="formData">
				<h3 class="mb-20">配置参数</h3>
				<!-- <a-form-item label="书写风格">
					<a-select v-model:value="formData.style" :options="[]" />
				</a-form-item> -->
				<a-form-item label="key定义大写" name="useUpper">
					<a-checkbox v-model:checked="formData.useUpper" />
				</a-form-item>
				<a-form-item label="labelFieldName" name="labelFieldName">
					<a-select v-model:value="formData.labelFieldName" mode="tags" :token-separators="[',']" />
				</a-form-item>
				<a-form-item label="optionLabelFieldName" name="optionLabelFieldName">
					<a-input v-model:value="formData.optionLabelFieldName" type="text" />
				</a-form-item>
				<a-form-item label="optionValueFieldName" name="optionValueFieldName">
					<a-input v-model:value="formData.optionValueFieldName" type="text" />
				</a-form-item>
			</a-form>
		</div>
		<div class="main">
			<Codemirror
				v-model="code"
				placeholder="Code goes here..."
				:style="{ width: '100%', height: '100%' }"
				:indent-with-tab="true"
				:tab-size="2"
				:extensions="extensions"
				@ready="onReady"
				@change="onChangeCode"
			/>
		</div>
		<div class="right">
			<highlightjs language="js" :code="result" />
		</div>
	</div>
</template>
<script setup>
import { ref, reactive, shallowRef, onMounted, watch } from 'vue';
import { Codemirror } from 'vue-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { isArray, isObject } from 'lodash-es';

import { uuid } from './utils';
import Enum from '../src/index';

const ENUM_LOCALSTORAGE_KEY = 'ENUM_LOCALSTORAGE_KEY';

const defaultCode = `new Enum([
    ['MALL', 1, '商场', { alias: '商圈' }],
    ['BUILDING', 2, '写字楼', { alias: '写字楼群' }]
])`;

const EXCLUDE_KEYS = ['handlers', 'immutableList'];

const PLACEHOLDER = uuid();

const cacheCode = localStorage.getItem(ENUM_LOCALSTORAGE_KEY) || defaultCode;

const code = ref(cacheCode);

const result = ref('');

const formData = reactive({
	// style: '',
	useUpper: true,
	labelFieldName: ['LABEL', 'DESC'],
	optionLabelFieldName: 'label',
	optionValueFieldName: 'value',
});

const extensions = [javascript()];

const view = shallowRef();

const onProgressData = (obj, o = {}) => {
	// 值为 undefined 的数据，先用占位符替换
	for (let key in obj) {
		if (!EXCLUDE_KEYS.includes(key)) {
			const v = obj[key];
			if (isArray(v) || isObject(v)) {
				o[key] = onProgressData(v, isArray(v) ? [] : {});
			} else {
				o[key] = v ?? PLACEHOLDER;
			}
		}
	}

	if (obj.OPTIONS) {
		o.OPTIONS = obj.OPTIONS;
	}

	return o;
};

const execCode = async (code) => {
	try {
		// console.log(eval(code));
		const progressedData = onProgressData(eval(code));
		const str = JSON.stringify(progressedData, null, 4).replaceAll(`"${PLACEHOLDER}"`, undefined);
		localStorage.setItem(ENUM_LOCALSTORAGE_KEY, code);
		result.value = str;
	} catch (err) {}
};

const onReady = (playload) => {
	view.value = playload.view;
};

const onChangeCode = (c) => {
	execCode(c);
};

watch(formData, (latestConfig) => {
	Enum.defineConfig(latestConfig);
	onChangeCode(code.value);
});

onMounted(() => {
	onChangeCode(code.value);
});
</script>
<style>
* {
	margin: 0;
	padding: 0;
}

html,
body,
.page {
	width: 100%;
	height: 100vh;
}

.mb-20 {
	margin-bottom: 20px;
}

.page {
	display: flex;
	overflow: hidden;
}

.left {
	width: 300px;
	padding: 10px;
}

.main {
	flex: 1;
	display: flex;
	height: 100%;
	border-top: 1px solid #ddd;
	overflow: hidden;
}

.right {
	flex: 1;
	overflow-y: auto;
	box-sizing: border-box;
	border-left: 1px solid #ddd;
	background: #f6f6f6;
}
</style>
