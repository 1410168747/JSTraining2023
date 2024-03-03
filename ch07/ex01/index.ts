/*
# 練習問題: 7 章

## 問題 7.1 💻🧪

2次元配列を行列として扱い、行列の加算・乗算を行う関数を作成しなさい。

**出題範囲**: 7.7
*/

/**
 * 2つの密な2次元数値型配列を要素ごとに加算し、結果を新しい密な配列として返します。
 *
 * @param matrix1 加算する最初の密な2次元数値型配列。
 * @param matrix2 加算する2番目の密な2次元数値型配列。
 * @returns 2つの入力配列の要素を要素ごとに加算した結果を格納する新しい密な2次元数値型配列。
 * @throws Error 2つの入力配列のサイズが一致しない場合。
 */
export function addMatrix(
  matrix1: number[][],
  matrix2: number[][]
): number[][] {
  if (
    size(matrix1)[0] !== size(matrix2)[0] ||
    size(matrix1)[1] !== size(matrix2)[1]
  ) {
    throw new Error("Matrix size is not matched");
  }
  return matrix1.map((row, i) =>
    row.map((_, j) => (matrix1?.[i]?.[j] ?? 0) + (matrix2?.[i]?.[j] ?? 0))
  );
}

const DO_N0T_CARE = "";

export function multiplyMatrix(
  matrix1: number[][],
  matrix2: number[][]
): number[][] {
  if (size(matrix1)[1] !== size(matrix2)[0]) {
    throw new Error("Matrix size is not matched");
  }
  return Array(size(matrix1)[0])
    .fill([]) //全ての行を配列として初期化
    .map((_, rowIndex) =>
      Array(size(matrix2)[1])
        .fill(0) //行ごとに全要素を0で初期化
        .map((_, columnIndex) =>
          Array(size(matrix1)[1]) //kの取得
            .fill(DO_N0T_CARE) //値が空になった結果スキップされることを防げれば値はなんでもよい。
            .reduce(
              (acc, _, k) =>
                acc + matrix1[rowIndex][k] * matrix2[k][columnIndex],
              0
            )
        )
    );
}

// export function multiplyMatrix(
//   matrix1: number[][],
//   matrix2: number[][]
// ): number[][] {
//   if (size(matrix1)[1] !== size(matrix2)[0]) {
//     throw new Error("Matrix size is not matched");
//   }

//   // 行列の積を計算
//   const result: number[][] = [];
//   for (let i = 0; i < matrix1.length; i++) {
//     result[i] = [];
//     for (let j = 0; j < matrix2[0].length; j++) {
//       result[i][j] = 0;
//       for (let k = 0; k < matrix1[0].length; k++) {
//         result[i][j] += matrix1[i][k] * matrix2[k][j];
//       }
//     }
//   }
//   return result;
// }

function size(m: number[][]): number[] {
  const raw = m.length;
  const col = m[0].length;
  return [raw, col];
}
