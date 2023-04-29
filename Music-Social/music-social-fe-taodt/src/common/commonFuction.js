export function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export function isStringify(obj) {
  try {
    JSON.stringify(obj);
  } catch (e) {
    return false;
  }
  return true;
}
