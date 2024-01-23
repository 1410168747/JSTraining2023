import { isWeekEnd1, isWeekEnd2, isWeekEnd3 } from "./index.ts";

describe("isWeekEnd1", () => {

  it("月", () => {
    const input = "月"
    expect(isWeekEnd1(input)).toBe(false);
  });

  it("火", () => {
    const input = "火"
    expect(isWeekEnd1(input)).toBe(false);
  });

  it("水", () => {
    const input = "水"
    expect(isWeekEnd1(input)).toBe(false);
  });

  it("木", () => {
    const input = "木"
    expect(isWeekEnd1(input)).toBe(false);
  });

  it("金", () => {
    const input = "金"
    expect(isWeekEnd1(input)).toBe(false);
  });

  it("土", () => {
    const input = "土"
    expect(isWeekEnd1(input)).toBe(true);
  });

  it("日", () => {
    const input = "日"
    expect(isWeekEnd1(input)).toBe(true);
  });

  it("未定義", () => {
    const input = "地"
    expect(isWeekEnd1(input)).toBe(false);
  });
});

describe("isWeekEnd1", () => {

  it("月", () => {
    const input = "月"
    expect(isWeekEnd2(input)).toBe(false);
  });

  it("火", () => {
    const input = "火"
    expect(isWeekEnd2(input)).toBe(false);
  });

  it("水", () => {
    const input = "水"
    expect(isWeekEnd2(input)).toBe(false);
  });

  it("木", () => {
    const input = "木"
    expect(isWeekEnd2(input)).toBe(false);
  });

  it("金", () => {
    const input = "金"
    expect(isWeekEnd2(input)).toBe(false);
  });

  it("土", () => {
    const input = "土"
    expect(isWeekEnd2(input)).toBe(true);
  });

  it("日", () => {
    const input = "日"
    expect(isWeekEnd2(input)).toBe(true);
  });

  it("未定義", () => {
    const input = "地"
    expect(isWeekEnd2(input)).toBe(false);
  });
});

describe("isWeekEnd3", () => {

  it("月", () => {
    const input = "月"
    expect(isWeekEnd3(input)).toBe(false);
  });

  it("火", () => {
    const input = "火"
    expect(isWeekEnd3(input)).toBe(false);
  });

  it("水", () => {
    const input = "水"
    expect(isWeekEnd3(input)).toBe(false);
  });

  it("木", () => {
    const input = "木"
    expect(isWeekEnd3(input)).toBe(false);
  });

  it("金", () => {
    const input = "金"
    expect(isWeekEnd3(input)).toBe(false);
  });

  it("土", () => {
    const input = "土"
    expect(isWeekEnd3(input)).toBe(true);
  });

  it("日", () => {
    const input = "日"
    expect(isWeekEnd3(input)).toBe(true);
  });

  it("未定義", () => {
    const input = "地"
    expect(isWeekEnd3(input)).toBe(false);
  });
});
