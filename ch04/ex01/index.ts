/*
# 練習問題: 4 章

## 問題 4.1 💻🧪

実部と虚部をプロパティとして持つ 2 つの複素数オブジェクトを引数として四則演算の結果を返す関数 `add`、`sub`、`mul`、`div` を実装しなさい。

**出題範囲**: 4.3
*/
type Complex = {
  real: number;
  imaginary: number;
};

function generateOperator(
  op: (a: Complex, b: Complex) => Complex
): (a: Complex, b: Complex) => Complex {
  return (a: Complex, b: Complex): Complex => {
    const result = op(a, b);
    if (isNaN(result.real) || isNaN(result.imaginary)) {
      throw new Error("Real or imaginary part is NaN");
    }
    return result;
  };
}

export const add = generateOperator((a: Complex, b: Complex) => {
  return {
    real: a.real + b.real,
    imaginary: a.imaginary + b.imaginary,
  };
});

export const sub = generateOperator((a: Complex, b: Complex) => {
  return {
    real: a.real - b.real,
    imaginary: a.imaginary - b.imaginary,
  };
});

export const mul = generateOperator((a: Complex, b: Complex) => {
  return {
    real: a.real * b.real - a.imaginary * b.imaginary,
    imaginary: a.real * b.imaginary + a.imaginary * b.real,
  };
});

export const div = generateOperator((a: Complex, b: Complex) => {
  const denominator = b.real * b.real + b.imaginary * b.imaginary;
  return {
    real: (a.real * b.real + a.imaginary * b.imaginary) / denominator,
    imaginary: (a.imaginary * b.real - a.real * b.imaginary) / denominator,
  };
});
