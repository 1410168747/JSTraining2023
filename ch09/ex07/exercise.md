## 問題 9.7 💻

継承を使う場合、サブクラスがスーパークラスの実装を引き継ぐため、クラス間の依存性が強くなる。これにより、特に大きい継承ツリーでは、あるクラスの変更がほかのクラスに影響を与えたり、無理にコードを共通化することで、不要な振る舞いや属性を持ったクラスができるという問題がある。

以下は `Animal` クラスを継承して様々な動物クラスを実装する例である。

```ts
class Animal {
  eat() {
    ...
  }
}

class Dog extends Animal {
  bite() {
    ...
  }
}

class Husky extends Dog {
  ...
}

class Cat extends Animal {
  scratch() {
    ...
  }
}

class Bird extends Animal {
  fly() {
    ...
  }
}

class Fish extends Animal {
  swim() {
    ...
  }
}
```

この例では動物として共通の"食べる"という振る舞い `eat()` を各動物が継承する。ここに"鳴く"という振る舞い `makeSound()` を追加することを考える。犬、猫、鳥は鳴くので `makeSound()` を共通の振る舞いとして利用したいが、スーパークラスに `makeSound()` を追加すると `Fish` は不要な振る舞いを持つことになる。

継承のかわりに合成(composition)を用いてこの問題を回避しなさい。

**出題範囲**: 9.5.3
