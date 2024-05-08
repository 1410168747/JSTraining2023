function sortJapanese(list: Array<string>): Array<string> {
  const collator = new Intl.Collator("ja", {
    sensitivity: "base",
    caseFirst: "lower",
  }).compare;
  return list.sort(collator);
}

function toJapaneseDateString(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    era: "long",
  };
  return new Intl.DateTimeFormat("ja-JP-u-ca-japanese", options).format(date);
}

export { sortJapanese, toJapaneseDateString };
