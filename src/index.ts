import { TOption, IItem, IConfig, THandler, IEnum, TArrayOption, IObjectOption } from './type';
import { omitBy, isNil, isObject, isArray, toUpper, toLower } from 'lodash-es';

let enumConfig: IConfig = {
    useUpper: true,
    separator: '_',
    labelFieldName: ['LABEL', 'DESC'],
    optionLabelFieldName: 'label',
    optionValueFieldName: 'value'
};

class Enum implements IEnum {
    static defineConfig: (options?: IConfig) => void;

    [x: string]: any;

    constructor(options?: TOption[]) {
        if (!options || !isArray(options)) return;

        options
            .filter(option => isObject(option) || isArray(option))
            .forEach(option => {
                if (isArray(option)) {
                    const [key, value, label, extData] = option as TArrayOption;
                    this.setItem(key, value, label, extData);
                } else {
                    const { key, value, label, extData } = option as IObjectOption;
                    this.setItem(key, value, label, extData);
                }
            });
    }

    private handlers: THandler[] = [];

    private immutableList: IItem[] = [];

    get separator() {
        return enumConfig?.separator;
    }

    get labelFieldNames() {
        const names = isArray(enumConfig.labelFieldName) ? enumConfig.labelFieldName : [enumConfig.labelFieldName]
        return names?.length ? names : ['LABEL'];
    }

    get OPTIONS() {
        const { optionLabelFieldName, optionValueFieldName } = enumConfig;
        return this.immutableList.map((item) => {
            item[optionLabelFieldName] = item.label;
            item[optionValueFieldName] = item.value;
            return this.handlers.reduce((prev, [fn, args]) => fn(prev, ...args), item);
        });
    }

    public keys: string[] = [];
    public values: IItem['value'][] = [];
    public labels: IItem['label'][] = [];

    genKey(key: string) {
        const { useUpper } = enumConfig;
        return useUpper ? toUpper(key) : toLower(key)
    }

    setItem(
        key: IItem["key"],
        value: IItem["value"],
        label: IItem["label"],
        extData: IItem["extData"]
    ) {
        if (key == null || this.keys.includes(key)) return this;

        this[this.genKey(key)] = value;
        this[value] = label;
        this.labelFieldNames.forEach(labelFieldName => {
            const _labelFieldName = `${key}${this.separator}${labelFieldName}`;
            this[this.genKey(_labelFieldName)] = label;
        })

        this.mountExtData(key, value, extData);

        this.keys.push(key);
        this.values.push(value);
        this.labels.push(label);

        this.immutableList.push({ key, value, label, extData });
        return this;
    }

    private mountExtData(key: IItem['key'], value: IItem['value'], extData: IItem['extData']) {
        if (!extData || !Object.entries(extData)?.length) return;

        Object.entries(extData).forEach(([extKey, val]) => {
            const extDataFieldNameByKey = `${key}${this.separator}${extKey}`;
            this[this.genKey(extDataFieldNameByKey)] = val;

            const extDataFieldNameByValue = `${value}${this.separator}${extKey}`;
            this[this.genKey(extDataFieldNameByValue)] = val;
        });
        const extDataKeyByItemKey = `${key}${this.separator}EXTDATA`;
        const extDataKeyByItemValue = `${value}${this.separator}EXTDATA`;
        this[this.genKey(extDataKeyByItemKey)] = extData;
        this[this.genKey(extDataKeyByItemValue)] = extData;
    }

    addHandler(fn: (v: unknown) => unknown, ...args: any[]) {
        const fns = this.handlers.map(([fn]) => fn) || [];
        if (!fn || typeof fn !== 'function' || fns.includes(fn)) return this;

        this.handlers.push([fn, args]);
        return this;
    }

    public filterHandler(name?: string | string[]) {
        this.filterHandlers = isArray(name) ? name : [name];
        return this;
    }

    public getOptions() {
        const options = this.immutableList.map((item) => {
            return this.handlers.reduce((prev, [fn, args]) => fn(prev, ...args), item);
        });
        return options;
    }
}

Enum.defineConfig = (options: IConfig = enumConfig) => {
    enumConfig = { ...enumConfig, ...omitBy(options, isNil) };
}

export default Enum;
