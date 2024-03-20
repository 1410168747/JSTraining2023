import crypto from "crypto";

class LinkList {
  private head: Node = new Node();

  add(key: string, value: string): void {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
      if (current.entry?.key === key) {
        current.entry.value = value;
        return;
      }
    }
    current.next = new Node({ key, value });
  }
  find(key: string): Node | undefined {
    let current: Node = this.head;
    while (current.next !== null) {
      current = current.next;
      if (current.entry?.key === key) {
        return current;
      }
    }
    return undefined;
  }
  remove(key: string): void {
    let previous = this.head;
    let current = this.head;
    while (current.next !== null) {
      previous = current;
      current = current.next;
      if (key === current.entry?.key) {
        previous.next = current.next;
        return;
      }
    }
  }
}

class Node {
  constructor(private _entry: Entry | null = null) {
    this._entry = _entry;
  }
  get entry() {
    return this._entry;
  }
  set entry(newEntry: Entry | null) {
    this._entry = newEntry;
  }
  get next() {
    return this._next;
  }
  set next(newNext: Node | null) {
    this._next = newNext;
  }
  private _next: Node | null = null;
}

type Entry = { key: string; value: string };

export interface HashTable {
  put(key: string, value: string): void;
  get(key: string): string | undefined;
  remove(key: string): void;
  size(): number;
}

class SimpleHashTable implements HashTable {
  private _size: number = 0;
  private entries: LinkList[] = [];
  put(key: string, value: string): void {
    const hash = toHash(key);
    if (this.entries[hash] == null) {
      this.entries[hash] = new LinkList();
    }
    if (this.get(key)) {
      this.remove(key);
    }
    this.entries[hash].add(key, value);
    this._size++;
  }
  get(key: string): string | undefined {
    const hash = toHash(key);
    if (this.entries[hash] == null) {
      return undefined;
    }
    const entry = this.entries[hash].find(key);
    return entry?.entry ? entry.entry.value : undefined;
  }
  remove(key: string): void {
    const hash = toHash(key);
    if (this.entries[hash] == null) {
      return;
    }
    this.entries[hash].remove(key);
    this._size--;
  }
  size(): number {
    return this._size;
  }
}

export const originalHash = (target: string) => {
  const cryptor = require("crypto").createHash("sha256");
  const hash = cryptor.update(target);
  const digest = hash.digest("hex");
  const int32 = parseInt(digest.slice(0, 8), 16);
  return int32;
};

let hash = originalHash;

export function toHash(target: string): number {
  return hash(target);
}

export function setHash(newHash: (arg: string) => number) {
  hash = newHash;
}

export function resetHash() {
  hash = originalHash;
}

export function newHashTable() {
  return new SimpleHashTable();
}
