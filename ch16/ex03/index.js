import crypto from "crypto";
import fs from "fs/promises";

// 鍵を生成する
function generateKey() {
  return crypto.randomBytes(32); // 32バイトのランダムなキー（aes-256 で必要なサイズ）
}

// 平文を鍵とAES-256-CBCで暗号化する。次に、暗号文と初期化ベクトル(IV)を、Base64エンコードして返す。
function encrypt64(text, key) {
  const iv = crypto.randomBytes(16); // 16バイトの初期化ベクトル

  // AES-256-CBC暗号化オブジェクトを作成
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

  // 暗号化する
  let encryptedBase64 = cipher.update(text, "utf-8", "base64");
  encryptedBase64 += cipher.final("base64");

  // 暗号文とIVをbase64で返す
  return {
    value: encryptedBase64,
    iv: iv.toString("base64"),
  };
}

// generateKeyの返り値を、JSON形式でファイルに保存する(非同期)
async function writeKey(key) {
  await fs.writeFile("key.json", JSON.stringify({ key: key.toString("base64") }));
}

// encrypt64の返り値を、JSON形式でファイルに保存する(非同期)
async function writeEncrypt64(data) {
  await fs.writeFile("encrypted.json", JSON.stringify(data));
}

// ファイルから鍵を読み込む (非同期)
async function readKey() {
  const data = await fs.readFile("key.json", "utf8");
  const { key } = JSON.parse(data);
  return Buffer.from(key, "base64");
}

// ファイルから暗号データを読み込む (非同期)
async function readEncrypt64() {
  const data = await fs.readFile("encrypted.json", "utf8");
  return JSON.parse(data);
}

// 復号して平文を返す
function decrypt64(data, key) {
  const iv = Buffer.from(data.iv, "base64"); // IV
  const encryptedText = data.value;

  // AES-256-CBC復号オブジェクトを作成
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);

  // 復号
  let decrypted = decipher.update(encryptedText, "base64", "utf-8");
  decrypted += decipher.final("utf-8");

  return decrypted;
}

// 指定の平文を暗号化とBase64エンコードし、後に復号する一連の処理
(async () => {
  // 平文
  const text = "Hello, World!";

  // 暗号化とBase64エンコード
  const key = generateKey();
  const encryptedData = encrypt64(text, key);

  // 鍵と暗号データをJSONで保存
  await writeKey(key);
  await writeEncrypt64(encryptedData);

  console.log("Encrypted Text (Base64):", encryptedData.value);

  // Base64デコードと復号
  const storedKey = await readKey();
  const storedEncryptedData = await readEncrypt64();
  const decryptedText = decrypt64(storedEncryptedData, storedKey);

  console.log("Decrypted Text:", decryptedText);
})();