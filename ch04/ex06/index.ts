type Shape = { maxWidth: number; maxHeight: number };

function resize(params: Shape) {
  let maxWidth = 600;
  let maxHeight = 480;

  if (params && params.maxWidth) {
    maxWidth = params.maxWidth;
  }

  if (params && params.maxHeight) {
    maxHeight = params.maxHeight;
  }

  console.log({ maxWidth, maxHeight });
}

function resize1(params: Shape) {
  let maxWidth = (params && params.maxWidth) || 600;
  let maxHeight = (params && params.maxHeight) || 480;

  console.log({ maxWidth, maxHeight });
}

function resize2(params: Shape) {
  let maxWidth = params?.maxWidth ?? 600;
  let maxHeight = params?.maxHeight ?? 480;

  console.log({ maxWidth, maxHeight });
}
