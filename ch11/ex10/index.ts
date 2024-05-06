function countDay(year: number, month: number): number {
  if (Number.isInteger(year) === false || year < 0) {
    throw new Error("Invalid year");
  }
  if (Number.isInteger(month) === false || month < 1 || 12 < month) {
    throw new Error("Invalid month");
  }
  // 何か引数がアンダーフローする場合は、上位の引数を「桁借り」します。
  // 例えば、new Date(2020, 5, 0) は、 2020 年 5 月 31 日を返します。
  return new Date(year, month, 0).getDate();
}

function countWeekDay(beginInclude: string, endInclude: string): number {
  if (
    checkFormat(beginInclude) === false ||
    checkFormat(endInclude) === false
  ) {
    throw new Error("Invalid date format");
  }
  let begin = new Date(beginInclude);
  const end = new Date(endInclude);
  if (end < begin) {
    throw new Error("Invalid range");
  }
  return Array.from(dateRange(begin, end)).filter(
    (e) => e.getDay() !== 0 && e.getDay() !== 6
  ).length;
}

function getDay(date: string, locale: string): string {
  if (checkFormat(date) === false) {
    throw new Error("Invalid date format");
  }
  return new Intl.DateTimeFormat(locale, { weekday: "long" })
    .format(new Date(date))
    .toString();
}

const DATE =
  /^(?<year>[1-9][0-9]{3})-(?<month>(?:0[1-9])|(?:1[0-2]))-(?<day>(?:0[1-9])|(?:1[0-9])|(?:2[0-9])|(?:3[0-1]))$/;

function checkFormat(input: string): boolean {
  return DATE.test(input);
}

function* dateRange(begin: Date, end: Date): Generator<Date> {
  const current = new Date(begin);
  while (current <= end) {
    yield new Date(current);
    current.setDate(current.getDate() + 1);
  }
}

const DATE_AND_TIME_WIHT_TIMEZONE =
  /^(?<year>[1-9][0-9]{3})-(?<month>(?:0[1-9])|(?:1[0-2]))-(?<day>(?:0[1-9])|(?:1[0-9])|(?:2[0-9])|(?:3[0-1]))T(?<hour>(?:0[0-9])|(?:1[0-9])|(?:2[0-3])):(?<minute>[0-5][0-9]):(?<second>[0-5][0-9])\.(?<subsecond>[0-9]{3})(?<timezone>(Z|[+-][0-1][0-9]:[0-5][0-9]))/;

function getDate(date: Date = new Date()): Date {
  const execResult = DATE_AND_TIME_WIHT_TIMEZONE.exec(date.toISOString());

  const currentMonth = Number.parseInt(execResult?.groups?.month as string);
  const month = String(currentMonth - 1 === 0 ? 12 : currentMonth - 1).padStart(
    2,
    "0"
  );
  const currentYear = Number.parseInt(execResult?.groups?.year as string);
  const year = String(
    currentMonth - 1 === 0 ? currentYear - 1 : currentYear
  ).padStart(4, "0");
  const timezone = execResult?.groups?.timezone;
  const creating = `${year}-${month}-01T00:00:00.000${timezone}`;
  const result = new Date(creating);
  return result;
}

export { countDay, countWeekDay, getDay, getDate };
