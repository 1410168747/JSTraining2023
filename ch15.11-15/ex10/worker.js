function gaussianBlur(data, width, height) {
  const kernelSize = 5;
  const kernel = [
    1, 4, 6, 4, 1,
    4, 16, 24, 16, 4,
    6, 24, 36, 24, 6,
    4, 16, 24, 16, 4,
    1, 4, 6, 4, 1
  ];
  const kernelSum = kernel.reduce((sum, val) => sum + val);
  const outputData = new Uint8ClampedArray(data.length);

  // Apply Gaussian blur
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let r = 0, g = 0, b = 0;
      for (let ky = -2; ky <= 2; ky++) {
        for (let kx = -2; kx <= 2; kx++) {
          const px = Math.min(Math.max(x + kx, 0), width - 1);
          const py = Math.min(Math.max(y + ky, 0), height - 1);
          const pixelIndex = (py * width + px) * 4;
          const kernelValue = kernel[(ky + 2) * kernelSize + (kx + 2)];

          r += data[pixelIndex] * kernelValue;
          g += data[pixelIndex + 1] * kernelValue;
          b += data[pixelIndex + 2] * kernelValue;
        }
      }
      const outputIndex = (y * width + x) * 4;
      outputData[outputIndex] = r / kernelSum;
      outputData[outputIndex + 1] = g / kernelSum;
      outputData[outputIndex + 2] = b / kernelSum;
      outputData[outputIndex + 3] = data[outputIndex + 3]; // alpha channel
    }
  }
  return outputData;
}

self.onmessage = (e) => {// メインスレッドからのメッセージを受け取る
  const { data, width, height } = e.data;
  const outputData = gaussianBlur(data, width, height);
  self.postMessage(outputData);// メインスレッドにメッセージを送信
};