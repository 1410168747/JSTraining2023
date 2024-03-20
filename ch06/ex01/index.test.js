import { toHash, newHashTable, setHash, resetHash } from "./index.ts";

describe("toHash", () => {
  it("should return different hash values for different strings", () => {
    expect(toHash("target1")).not.toBe(toHash("target2"));
  });

  it("always return same hash codes", () => {
    expect(toHash("target1")).toBe(881613512);
    expect(toHash("target1")).toBe(881613512);
  });
});


describe("newHashTable", () => {
  it("HashTableCheck", () => {
    const sut = newHashTable();
    expect(sut.size()).toBe(0);// 初期化したらサイズは0
    sut.put("key1", "value1");
    expect(sut.size()).toBe(1);// 追加したらサイズは1
    sut.remove("key99");
    expect(sut.size()).toBe(1);// 存在しないキーを削除してもサイズは変わらない
    expect(sut.get("key99")).toBeUndefined();// 存在しないキーを取得するとundefined
    expect(sut.get("key1")).toBe("value1");// 存在するキーは取れる
    sut.put("key2", "value2");
    expect(sut.size()).toBe(2);
    expect(sut.get("key2")).toBe("value2");
    sut.put("key2", "value3");// 存在するキーを書き換える
    expect(sut.size()).toBe(2);// サイズは変わらない
    expect(sut.get("key2")).toBe("value3");// 値は変わる
    sut.remove("key2");
    expect(sut.size()).toBe(1);
    expect(sut.get("key2")).toBeUndefined();// 削除したら取れなくなる
  });
});

describe("newHashTable", () => {
  it("HashTableCheck", () => {
    setHash((_) => 1);
    expect(toHash("foo")).toBe(1);
    expect(toHash("bar")).toBe(1);
    expect(toHash("boo")).toBe(1);
    const sut = newHashTable();
    sut.put("key1", "value1");
    sut.put("key2", "value2");
    expect(sut.get("key1")).toBe("value1");
    expect(sut.get("key2")).toBe("value2");
    resetHash();
  });
});