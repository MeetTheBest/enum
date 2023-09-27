interface IExtData {
    [x: string]: any;
}
export type TArrayOption = [string, any?, any?, IExtData?];
export interface IObjectOption {
    key: string;
    value?: any;
    label?: any;
    extData?: IExtData;
}
export type TOption = TArrayOption | IObjectOption;
export interface IItem {
    key: string;
    value?: any;
    label?: any;
    extData?: IExtData;
}
export type THandler = [(v: any, ...args: any[]) => any, any[]];
export interface IEnum {
    [x: string]: any;
}
export {};
