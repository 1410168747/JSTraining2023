export function substring(str:string, indexStart:number, indexEnd:number): string {
  return str.substring(indexStart,indexEnd);
}

export function slice(str:string, indexStart:number, indexEnd:number):string {
  return str.slice(indexStart,indexEnd);
}

export function padStart(str:string, targetLength:number, padString:string):string {
  return str.padStart(targetLength,padString);
}

export function trim(str:string):string {
  return str.trim();
}
