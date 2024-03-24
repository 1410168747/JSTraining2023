import { m, mArrow } from './index.ts';


describe('m', () => {
  it("test", () => {
    const expected = "_";
    const param = ["N.A.", expected];
    let actual;
    const spy = jest.spyOn(console, 'log').mockImplementation((message, ..._) => { actual = message; })
    m(...param)
    expect(spy).toHaveBeenCalled();
    expect(actual).toEqual(expected);
    spy.mockRestore();
  });
});

describe('mArrow', () => {
  it("test", () => {
    const expected = "_";
    const param = ["N.A.", expected];
    let actual;
    const spy = jest.spyOn(console, 'log').mockImplementation((message, ..._) => { actual = message; })
    mArrow(...param)
    expect(spy).toHaveBeenCalled();
    expect(actual).toEqual(expected);
    spy.mockRestore();
  });
});