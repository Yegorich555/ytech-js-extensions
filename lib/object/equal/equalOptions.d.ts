/**
 * Options for equal objects
 */
export default class EqualOptions {
  checkKeysLength: boolean; //only direct checking
  ignoreEmptyArrays: boolean;
  ignoreFunctions: boolean;
  //ignoreNulls= true; always true
  showFalseReason:
    | boolean
    | ((msg: string, v1: any, v2: any, key: string) => string);
  falseReason: string;
}
