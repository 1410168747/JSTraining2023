abstract class Animal {
  private msg = `${this.constructor.name} is eating`;
  eat(): string {
    console.log(this.msg);
    return this.msg;
  }
}

interface SoundMaker {
  makeSound(): string;
}

class SoundMakerImpl {
  private msg: string;
  constructor(private animal: Animal) {
    this.msg = `${this.animal.constructor.name} is making sound`;
  }
  makeSound() {
    console.log(this.msg);
    return this.msg;
  }
}

export class Dog extends Animal implements SoundMaker {
  private soundMaker: SoundMaker;
  constructor() {
    super();
    this.soundMaker = new SoundMakerImpl(this);
  }
  bite() {
    console.log(`${this.constructor.name} is biting`);
  }
  makeSound() {
    return this.soundMaker.makeSound();
  }
}

export class Husky extends Dog {}

export class Cat extends Animal implements SoundMaker {
  private soundMaker: SoundMaker;
  constructor() {
    super();
    this.soundMaker = new SoundMakerImpl(this);
  }
  scratch() {
    console.log(`${this.constructor.name} is scratching`);
  }
  makeSound() {
    return this.soundMaker.makeSound();
  }
}

export class Bird extends Animal implements SoundMaker {
  private soundMaker: SoundMaker;
  constructor() {
    super();
    this.soundMaker = new SoundMakerImpl(this);
  }
  fly() {
    console.log(`${this.constructor.name} is fling`);
  }
  makeSound() {
    return this.soundMaker.makeSound();
  }
}

export class Fish extends Animal {
  swim() {
    console.log(`${this.constructor.name} is swimming`);
  }
}
