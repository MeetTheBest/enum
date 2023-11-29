import { TOption, IItem, IConfig, IEnum } from './type';
declare class Enum implements IEnum {
    static defineConfig: (options?: IConfig) => void;
    [x: string]: any;
    constructor(options?: TOption[]);
    private handlers;
    private immutableList;
    get separator(): string | undefined;
    get labelFieldNames(): (string | undefined)[];
    get OPTIONS(): IItem[];
    get options(): IItem[];
    keys: string[];
    values: IItem['value'][];
    labels: IItem['label'][];
    genKey(key: string): string;
    setItem(key: IItem["key"], value: IItem["value"], label: IItem["label"], extData: IItem["extData"]): this;
    private mountExtData;
    addHandler(fn: (v: unknown) => unknown, ...args: any[]): this;
    filterHandler(name?: string | string[]): this;
    getOptions(): IItem[];
}
export default Enum;
