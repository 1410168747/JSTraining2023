# 練習問題 17 章

## 問題 17.2 💻🧪

まず、[問題 16.8](../ch16/README.md#問題-168-) で実施した GitHub の Issue を操作する課題に関して、Issue の各操作関数を export してライブラリとして利用できるようにしなさい。

それに対して、Jest を用いてテストを実施しなさい。
テストを実施するにあたって、実際の GitHub の API にはアクセスせずに、ライブラリ単体のテストを行うためにモックを利用する。
モックの実現方法として以下の 2 つの方法を実施しなさい。

- [Jest のモック関数](https://jestjs.io/ja/docs/mock-function-api) を利用して GitHub の API をモックする方法
- [Polly.JS](https://github.com/Netflix/pollyjs) を用いて、最初の一回だけ GitHub の API と通信し、そのインタラクションを記録して、次回以降は記録されたレスポンスをリプレイする方法

- **出題範囲 17.3**
