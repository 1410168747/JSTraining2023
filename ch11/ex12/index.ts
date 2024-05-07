class InvalidInputError extends Error {
  constructor(
    message: string,
    private actualValue?: any
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
  get name(): string {
    return "InvalidInputError";
  }

  toString(): string {
    return `${super.toString()} (${this.actualValue})`;
  }
}

function countDay(year: number, month: number): number {
  if (Number.isInteger(year) === false || year < 0) {
    throw new InvalidInputError(
      year < 0
        ? "Year must be greater than or equal to 0"
        : "Year must be an integer",
      year
    );
  }
  if (Number.isInteger(month) === false || month < 1 || 12 < month) {
    throw new InvalidInputError("Month must be between 1 and 12", month);
  }
  // 何か引数がアンダーフローする場合は、上位の引数を「桁借り」します。
  // 例えば、new Date(2020, 5, 0) は、 2020 年 5 月 31 日を返します。
  // 言い換えると、6 月 0 日を指定すると 5 月 31 日になる仕様を使ってうまくやっています。
  return new Date(year, month, 0).getDate();
}

function countWeekDay(beginInclude: string, endInclude: string): number {
  if (
    checkFormat(beginInclude) === false ||
    checkFormat(endInclude) === false
  ) {
    throw new InvalidInputError("Invalid date format");
  }
  let begin = new Date(beginInclude);
  const end = new Date(endInclude);
  if (end < begin) {
    throw new InvalidInputError("Invalid range");
  }
  return Array.from(dateRange(begin, end)).filter(
    (e) => e.getDay() !== 0 && e.getDay() !== 6
  ).length;
}

function getDay(date: string, locale: string): string {
  if (checkFormat(date) === false) {
    throw new InvalidInputError("Invalid date format");
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
  /^(?<year>[1-9][0-9]{3})-(?<month>(?:0[1-9])|(?:1[0-2]))-(?<day>(?:0[1-9])|(?:1[0-9])|(?:2[0-9])|(?:3[0-1]))T(?<hour>(?:0[0-9])|(?:1[0-9])|(?:2[0-3])):(?<minute>[0-5][0-9]):(?<second>[0-5][0-9])\.(?<subsecond>[0-9]{3})Z/;

/**
 * 与えられた日付（または現在の日付）に対して、その1ヶ月前の月の初日を返す関数。
 * 時間帯の違いを適切に処理して、その月の初日をUTCで返します。
 *
 * @param {Date} date - 基準となる日付（デフォルトは現在の日付）
 * @return {Date} 計算された1ヶ月前の月の初日
 * @throws {Error} 与えられた日付が無効な場合
 */
function getFirstDayOfPreviousMonth(date: Date = new Date()): Date {
  // ホスト環境のタイムゾーンとUTCとの差をミリ秒単位で取得
  const offsetMs = new Date().getTimezoneOffset() * 60 * 1000;

  // 現在のローカル時刻をUTCに変換するための調整
  const localDate = new Date(date.getTime() - offsetMs);

  // 文字列表現の日付から年と月を抽出
  const execResult = DATE_AND_TIME_WIHT_TIMEZONE.exec(localDate.toISOString());
  if (execResult === null) {
    throw new Error("Invalid date format");
  }
  const { month: monthString, year: yearString } = execResult.groups || {};

  // 抽出した月から1を減算して先月を取得、1月の場合は12月に修正
  const m = Number.parseInt(monthString);
  const month = String(m === 1 ? 12 : m - 1).padStart(2, "0");
  const mm = Number.parseInt(month, 10) - 1;
  console.log(mm);

  // 月の減算結果が12月の場合、年も1減らす
  const y = Number.parseInt(yearString);
  const year = String(m === 0 ? y - 1 : y).padStart(4, "0");
  const yy = Number.parseInt(year, 10);
  console.log(yy);

  // 取得した年と月、および"01日"を組み合わせて、新しい日付を作成（ただしUTC）
  const lastMonth1stUTC = new Date(
    `${year}-${month}-01T00:00:00.000Z`
  ).getTime();

  // 元のローカル時刻に戻して返却（タイムゾーン差を再度加える）
  return new Date(lastMonth1stUTC + offsetMs);
}

export { countDay, countWeekDay, getDay, getFirstDayOfPreviousMonth };
