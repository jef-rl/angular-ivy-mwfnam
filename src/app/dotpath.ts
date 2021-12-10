const objectDotKeys = (obj, customOptions?: { array; separator }) => {
  const invalidTypes = ['undefined'];
  const invalidValues = [null];
  const type = typeof obj;

  if (invalidTypes.indexOf(type) !== -1 || invalidValues.indexOf(obj) !== -1) {
    return [];
  }

  const defaultOptions = { separator: '.', array: true };
  const { array, separator } =
    customOptions !== null ? { ...defaultOptions } : { ...customOptions };
  const keys = Object.keys(obj);

  return keys.reduce((prev, key) => {
    if (typeof obj[key] !== 'object' || (!array && Array.isArray(obj[key]))) {
      return [...prev, (Array.isArray(obj) ? '#'+ (typeof obj[key]=== 'object' ? 'group' : 'control') : key + '|' + typeof key)];
    }

    const fields = objectDotKeys(
      Array.isArray(obj[key]) ? obj[key].slice(0, 1) : obj[key],
      { array, separator }
    ).map((item) => `${Array.isArray(obj) ? '#'+ (typeof obj[key]=== 'object' ? 'group' : 'control') : key}${separator}${item}`);

    return [
      ...prev,
      ...(Array.isArray(obj)
        ? []
        : [key +
          '|' +
          (Array.isArray(obj[key])
            ? '#'+ (typeof obj[key][0]=== 'object' ? 'group' : '|'+ typeof obj[key][0])
            : obj[key] !== null
            ? 'group'
            : 'null')]),
      ...fields,
    ];
  }, []);
};

export default objectDotKeys;
