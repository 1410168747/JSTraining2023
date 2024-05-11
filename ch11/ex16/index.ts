const DELAY = 1000;

function retryWithExponentialBackoff(
  func: Function,
  maxRetry: number,
  callback: Function
): void {
  let retry = 0;
  const retryFunc = () => {
    const result = func();
    if (result === true) {
      callback(true);
    } else if (retry === maxRetry) {
      callback(false);
    } else {
      retry++;
      setTimeout(retryFunc, 2 ** (retry - 1) * DELAY);
    }
  };
  retryFunc();
}

export { retryWithExponentialBackoff };
