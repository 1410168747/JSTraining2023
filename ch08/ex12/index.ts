export function f(body: string): (...args: any[]) => any {
  const args = splitString(body);
  console.log(args);
  return new Function(...args) as (...args: any[]) => any;
}

function splitString(str: string): Array<string> {
  const matches = str.match(/\$\d+/g);
  return [...(matches || []), `return ${str};`];
}
