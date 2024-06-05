const DELAY = 1000;

function retryWithExponentialBackoff(func, maxRetry, delayBase = DELAY) {
  let retry = 0;
  function retryFunc() {
    return func()
      .then((e) => Promise.resolve(e))
      .catch((err) =>
        new Promise((resolve, reject) => {
          if (retry === maxRetry) {
            reject(err);
          }
          setTimeout(resolve, delayBase * 2 ** retry);
          retry++
        }).then(retryFunc));
  }
  return retryFunc();
}

export { retryWithExponentialBackoff };