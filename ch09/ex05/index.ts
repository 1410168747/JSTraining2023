export function instanceOf(object: unknown, constructor: Function): boolean {
  let proto = Object.getPrototypeOf(object);
  while (proto !== null) {
    if (proto === constructor.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
