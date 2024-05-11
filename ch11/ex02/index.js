// f はオブジェクトを1つ引数に取る関数
function cache(f) {
  // Flyweightパターンを使ってキャッシュを実装
  const pool = new WeakMap();
  return (e) => {
    let v = pool.get(e);
    if (v == null) {
      v = f(e);
      pool.set(e, v);
    }
    return v;
  };
}

const WAIT_TIME_SEC = 3;

async function slowFn(obj) {
  await ((ms) => new Promise(resolve => setTimeout(resolve, ms)))(WAIT_TIME_SEC * 1000)
  return obj;
}

export { cache, slowFn };
