import { retryWithExponentialBackoff } from "./index.js"

describe("ex12", () => {

  it("リトライ上限が2のとき、funcが1回目(リトライ0回目)で成功する", async () => {
    let counter = -1;
    const func = () => {
      counter++;
      if (counter === 0) {
        return Promise.resolve(true);
      }
      return Promise.reject(new Error(counter))
    }
    const actual = await retryWithExponentialBackoff(func, 2, 100);
    expect(actual).toBe(true);
  })

  it("リトライ上限が2のとき、funcが2回目(リトライ1回目)で成功する", async () => {
    let counter = -1;
    const func = () => {
      counter++;
      if (counter === 1) {
        return Promise.resolve(true);
      }
      return Promise.reject(new Error(counter))
    }
    const actual = await retryWithExponentialBackoff(func, 2, 100);
    expect(actual).toBe(true);
  })

  it("リトライ上限が2のとき、funcが3回目(リトライ2回目)で成功する", async () => {
    let counter = -1;
    const func = () => {
      counter++;
      if (counter === 2) {
        return Promise.resolve(true);
      }
      return Promise.reject(new Error(counter))
    }
    const actual = await retryWithExponentialBackoff(func, 2, 100);
    expect(actual).toBe(true);
  })

  it("リトライ上限が2のとき、funcが4回目(リトライ3回目)で成功するが、リトライ上限を超えているのでエラーとなる。", async () => {
    let counter = -1;
    const func = () => {
      counter++;
      if (counter === 3) {
        return Promise.resolve(true);
      }
      return Promise.reject(new Error(counter))
    }
    expect(() => retryWithExponentialBackoff(func, 2, 100)).rejects.toThrow();

  })

})
