function logProperties(object: any) {
  for(const p of Object.getOwnPropertyNames(object)){
    console.log(`${p}:${object[p]}`);
  }
}

logProperties({ a: 1, b: 2, c: 3 });