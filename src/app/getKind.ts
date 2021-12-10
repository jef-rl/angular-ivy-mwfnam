import { isArray, isBase64, isBoolean, isDate, isDateValid, isDefined, isError, isFunction, isGuid, isInfinity, isNull, isNumber, isObject, isPlainObject, isRegExp, isString, isSymbol, isUndefined } from "./utils";

export const getKind = (value) => {
  let kind = '';
  kind = kind==='' && isArray(value) ? 'array' : kind;
  // kind = kind==='' && isBase64(value) ? 'base64' : kind;
  kind = kind==='' && isBoolean(value) ? 'boolean' : kind;
  kind = kind==='' && isDate(value) ? 'date' : kind;
  // kind = kind==='' && isDateValid(value) ? 'date' : kind;
  // kind = kind==='' && isDefined(value) ? '' : kind;
  // kind = kind==='' && isError(value) ? '' : kind;
  // kind = kind==='' && isFunction(value) ? 'function' : kind;
  // kind = kind==='' && isGuid(value) ? 'guid' : kind;
  // kind = kind==='' && isInfinity(value) ? '' : kind;
  kind = kind==='' && isNull(value) ? 'null' : kind;
  kind = kind==='' && isNumber(value) ? 'number' : kind;
  kind = kind==='' && isObject(value) ? (value['__datatype__'] ? value['__datatype__'] : 'object') : kind;
  // kind = kind==='' && isPlainObject(value) ? 'object' : kind;
  kind = kind==='' && isRegExp(value) ? 'regexp' : kind;
  kind = kind==='' && isString(value) ? 'string' : kind;
  // kind = kind==='' && isSymbol(value) ? 'symbol' : kind;
  kind = kind==='' && isUndefined(value) ? 'undefined' : kind;
  return kind===''? 'undefined' : kind
};
