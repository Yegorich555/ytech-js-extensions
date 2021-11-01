/**
 * function (msg, v1, v2, key) { } or if boolean then after function true will be changed to message.
 */
export default class EqualFalseResult {
  msg: string;
  v1: any;
  v2: any;
  key: string;

  constructor(msg: string, v1: any, v2: any, key: string);
}
