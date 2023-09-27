import { TOption, IItem, THandler, IEnum, TArrayOption, IObjectOption } from './type';
import { isObject, isArray, toUpper, toLower } from 'lodash-es';

class Enum implements IEnum {

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

    keys: string[] = [];
    values: IItem['value'][] = [];
    labels: IItem['label'][] = [];

    setItem(
        key: IItem["key"],
        value: IItem["value"],
        label: IItem["label"],
        extData: IItem["extData"]
    ) {

        this[toLower(key)] = value;
        this[toUpper(key)] = value;

        this[value] = label;

        this[toLower(`${key}_LABEL`)] = label;
        this[toUpper(`${key}_LABEL`)] = label;
        this[toLower(`${key}_DESC`)] = label;
        this[toUpper(`${key}_DESC`)] = label;

        this.mountExtData(key, extData);

        this.keys.push(key);
        this.values.push(value);
        this.labels.push(label);

        this.immutableList.push({ key, value, label, extData });
        return this;
    }

    private mountExtData(key: IItem['key'], extData: IItem['extData']) {
        if (!extData || !Object.entries(extData)?.length) return;

        Object.entries(extData).forEach(([extKey, val]) => {

            this[`${toLower(key)}_${toLower(extKey)}`] = val;
            this[`${toUpper(key)}_${toUpper(extKey)}`] = val;

            this[`${toLower(key)}${toLower(extKey)}`] = val;
            this[`${toUpper(key)}${toUpper(extKey)}`] = val;
        });
    }

    addHandler(fn: (v: unknown) => unknown, ...args: any[]) {
        const fns = this.handlers.map(([fn]) => fn) || [];
        if (!fn || typeof fn !== 'function' || fns.includes(fn)) return this;

        this.handlers.push([fn, args]);
        return this;
    }

    get OPTIONS() {
        return this.immutableList.map((item) => {
            return this.handlers.reduce((prev, [fn, args]) => fn(prev, ...args), item);
        });
    }
}

export default Enum;
