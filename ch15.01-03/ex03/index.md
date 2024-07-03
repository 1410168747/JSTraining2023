## 解答

### 手順

#### 1

ルートフォルダにて、以下のコマンドでサーバを立ち上げる

```shell
node ch15.01-03/ex02/root/servers/server.js
```

#### 2

_Chrome_ で`http://localhost:8080`にアクセスする。

#### 3

_開発者ツール_ > _コンソール_ にて以下のログを確認する

```shell
Failed to find a valid digest in the 'integrity' attribute for resource 'http://localhost:8080/src/module.js' with computed SHA-256 integrity 'tSsNWT+SY0pakOee0C3N2DRXJtEywz4cyXEWYjk8ISM='. The resource has been blocked.
```
スクリプトが変更される攻撃(クロスサイトスクリプティングやCDNへの攻撃)が発生しても、変更された後のスクリプトが実行されないため、悪意のあるコードが実行されないメリットがある。