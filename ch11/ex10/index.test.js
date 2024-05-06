import { countDay, countWeekDay, getDay, getFirstDayOfPreviousMonth } from "./index";

describe("countDay", () => {

    it.each`
    year | month | expected | comments
    ${2024} | ${1} | ${31} | ${""}
    ${2024} | ${2} | ${29} | ${""}
    ${2024} | ${3} | ${31} | ${""}
    ${2024} | ${4} | ${30} | ${""}
    ${2024} | ${5} | ${31} | ${""}
    ${2024} | ${6} | ${30} | ${""}
    ${2024} | ${7} | ${31} | ${""}
    ${2024} | ${8} | ${31} | ${""}
    ${2024} | ${9} | ${30} | ${""}
    ${2024} | ${10} | ${31} | ${""}
    ${2024} | ${11} | ${30} | ${""}
    ${2024} | ${12} | ${31} | ${""}
    ${2100} | ${2} | ${28} | ${"4, 100で割り切れ, かつ 400で割り切れない年は閏年ではない"}
    `(`year: $year, month: $month has $expected days`, ({ year, month, expected }) => {
        expect(countDay(year, month)).toBe(expected);
    });

    it.each`
    year | month | expected | comments
    ${-1} | ${Number.NaN} | ${"Invalid year"} | ${""}
    ${1.1} | ${Number.NaN} | ${"Invalid year"} | ${""}
    ${2024} | ${0} | ${"Invalid month"} | ${""}
    ${2024} | ${13} | ${"Invalid month"} | ${""}
    ${2024} | ${1.1} | ${"Invalid month"} | ${""}
    `(`year: $year, month: $month cought $expected`, ({ year, month, expected }) => {
        expect(() => { countDay(year, month) }).toThrow(expected);
    });

});

describe("countWeekDay", () => {

    it.each`
    begin | end | expected | comments
    ${"2024-05-06"} | ${"2024-05-06"} | ${1} | ${""}
    ${"2024-05-01"} | ${"2024-05-31"} | ${23} | ${""}
    `(`begin: $begin, end: $end has $expected days`, ({ begin, end, expected }) => {
        expect(countWeekDay(begin, end)).toBe(expected);
    });

    it.each`
    begin | end | expected | comments
    ${"invalid"} | ${"2024-05-06"} | ${"Invalid date format"} | ${""}
    ${"2024-05-06"} | ${"invalid"} | ${"Invalid date format"} | ${""}
    ${"2024-05-06"} | ${"2023-05-05"} | ${"Invalid range"} | ${""}
    ${"10000-01-01"} | ${"invalid"} | ${"Invalid date format"}  | ${""}
    ${"9-01-01"} | ${"invalid"} | ${"Invalid date format"}  | ${""}
    ${"09-01-01"} | ${"invalid"} | ${"Invalid date format"}  | ${""}
    ${"099-01-01"} | ${"invalid"} | ${"Invalid date format"}  | ${""}
    ${"0999-01-01"} | ${"invalid"} | ${"Invalid date format"}  | ${""}
    `(`begin: $begin, end: $end cought $expected`, ({ begin, end, expected }) => {
        expect(() => { countWeekDay(begin, end) }).toThrow(expected);
    });

});

describe("getDay", () => {

    it.each`
    date | locale | expected | comments
    ${"2024-05-06"} | ${"en-US"} | ${"Monday"} | ${""}
    ${"2024-05-07"} | ${"en-US"} | ${"Tuesday"} | ${""}
    ${"2024-05-08"} | ${"en-US"} | ${"Wednesday"} | ${""}
    ${"2024-05-09"} | ${"en-US"} | ${"Thursday"} | ${""}
    ${"2024-05-10"} | ${"en-US"} | ${"Friday"} | ${""}
    ${"2024-05-11"} | ${"en-US"} | ${"Saturday"} | ${""}
    ${"2024-05-12"} | ${"en-US"} | ${"Sunday"} | ${""}
    ${"2024-05-06"} | ${"ja-JP"} | ${"月曜日"} | ${""}
    ${"2024-05-07"} | ${"ja-JP"} | ${"火曜日"} | ${""}
    ${"2024-05-08"} | ${"ja-JP"} | ${"水曜日"} | ${""}
    ${"2024-05-09"} | ${"ja-JP"} | ${"木曜日"} | ${""}
    ${"2024-05-10"} | ${"ja-JP"} | ${"金曜日"} | ${""}
    ${"2024-05-11"} | ${"ja-JP"} | ${"土曜日"} | ${""}
    ${"2024-05-12"} | ${"ja-JP"} | ${"日曜日"} | ${""}
    `(`date: $date, locale: $locale is $expected`, ({ date, locale, expected }) => {
        expect(getDay(date, locale)).toBe(expected);
    });

});

describe("getFirstDayOfPreviousMonth", () => {

    it.each`
    input | expected | comments
    ${new Date("2024-05-06T08:28:16.000Z")} | ${new Date(1711897200000)} | ${""}
    ${new Date("2024-03-31T23:00:00.000Z")} | ${new Date(1709218800000)} | ${"new Date('2024-03-31T23:00:00.000Z') は JST: 2024-04-01 08:00:00. またnew Date(1709218800000) は UTC: 2024-02-29 15:00:00/ JST: 2024-03-01 00:00:00"}
    `(`input: $input gets $expected`, ({ input, expected }) => {
        expect(getFirstDayOfPreviousMonth(input).getTime()).toEqual(expected.getTime());
    });

});