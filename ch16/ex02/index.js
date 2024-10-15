import { spawn } from "child_process";
import path from "path";

// ESMでこのファイルの絶対パスとして__dirnameを定義するイディオム
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// startChildで起動したプロセスの参照
let child = null;

// node ./child.js を起動し、このプロセスが終了したときに解決するPromiseを返す
async function startChild() {
  const childPath = path.join(__dirname, "child.js");
  child = spawn("node", [childPath]);

  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  return new Promise((res) => {
    child.on("close", (code, signal) => {
      res([code, signal]);
    });
  });
}

let shuttingDown = false;

// Graceful Shutdownで捕捉するためのシグナルを定義
const signals = ["SIGINT", "SIGTERM"];

// シグナル発行時の動作
signals.forEach((signal) => {
  process.on(signal, async () => {
    if (!shuttingDown) {
      shuttingDown = true;
      console.log(`Received ${signal}, sending to child and shutting down gracefully...`);

      if (child) {
        // 子プロセスにシグナルを送信
        child.kill(signal);

        // 子プロセスが終了するのを待機
        const [code, childSignal] = await startChild(); // Note: `startChild()` はプロセスの終了を意味する

        if (childSignal === signal) {
          console.log(`Child exited due to ${signal}.`);
        } else {
          console.log(`Child exited with code: ${code}, signal: ${childSignal}`);
        }
      }

      process.exit(0);
    }
  });
});

// 子プロセスの自動再起動処理
async function monitorChild() {
  while (!shuttingDown) {
    console.log("Starting child process...");
    const [code, signal] = await startChild();

    if (code !== 0 && !shuttingDown) {
      console.log(`Child process exited with code ${code} (signal: ${signal}). Restarting...`);
    } else {
      // 正常終了またはシグナルの受信による終了の場合
      break;
    }
  }
}

// メインロジックの実行
monitorChild();