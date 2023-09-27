import { TOption, IItem, IEnum } from './type';
declare class Enum implements IEnum {
    [x: string]: any;
    constructor(options?: TOption[]);
    private handlers;
    private immutableList;
    keys: string[];
    values: IItem['value'][];
    labels: IItem['label'][];
    setItem(key: IItem["key"], value: IItem["value"], label: IItem["label"], extData: IItem["extData"]): this;
    private mountExtData;
    addHandler(fn: (v: unknown) => unknown, ...args: any[]): this;
    get OPTIONS(): IItem[];
}
export default Enum;
