type UrlObject = {
  base: string;
  path?: string;
  addQuery?: Array<[string, string]>;
};

function modifyUrl(param: UrlObject): string {
  let result: URL;
  try {
    result = new URL(param.base);
  } catch (e) {
    throw new Error("Invalid URL");
  }
  result.pathname = param.path ?? result.pathname;
  param.addQuery?.forEach(([key, value]) => {
    result.searchParams.append(key, value);
  });
  console.log(result.toString());
  return result.toString();
}

export { modifyUrl };
