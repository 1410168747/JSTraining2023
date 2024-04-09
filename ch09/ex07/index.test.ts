import { Dog, Husky, Cat, Bird, Fish } from "./index.ts"; // ts でも可

describe("Dog", () => {
  test("Dog", () => {
    const sut = new Dog();
    expect(sut.eat()).toEqual("Dog is eating");
    expect(sut.makeSound()).toEqual("Dog is making sound");
  });
  test("Husky", () => {
    const sut = new Husky();
    expect(sut.eat()).toEqual("Husky is eating");
    expect(sut.makeSound()).toEqual("Husky is making sound");
  });
  test("Cat", () => {
    const sut = new Cat();
    expect(sut.eat()).toEqual("Cat is eating");
    expect(sut.makeSound()).toEqual("Cat is making sound");
  });
  test("Bird", () => {
    const sut = new Bird();
    expect(sut.eat()).toEqual("Bird is eating");
    expect(sut.makeSound()).toEqual("Bird is making sound");
  });
  test("Fish", () => {
    const sut = new Fish();
    expect(sut.eat()).toEqual("Fish is eating");
  });
});
