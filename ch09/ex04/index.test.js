import { Warrior, MagicWarrior } from "./index.js"; // ts でも可

test("Warrior#atk is 0", () => {
    const sut = new Warrior();
    expect(sut.atk).toBe(0);
    expect(sut.attack()).toBe(0);
});

test("Warrior#atk is 2", () => {
    const sut = new Warrior(2);
    expect(sut.atk).toBe(2);
    expect(sut.attack()).toBe(4);
});

test("MagicWarrior#atk is 0", () => {
    const sut = new MagicWarrior();
    expect(sut.atk).toBe(0);
    expect(sut.attack()).toBe(0);
});

test("MagicWarrior#atk is 2", () => {
    const sut = new MagicWarrior(2, 1);
    expect(sut.atk).toBe(2);
    expect(sut.attack()).toBe(5);
});