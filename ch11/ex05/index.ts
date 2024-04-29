type Format = {
  format: "PDF" | "ZIP" | "GIF" | "PNG" | "UNKNOWN";
  check: Function;
};

const FORMATS: Array<Format> = [
  {
    format: "PDF",
    check: (data: DataView) =>
      data.getUint8(0) === 0x25 &&
      data.getUint8(1) === 0x50 &&
      data.getUint8(2) === 0x44 &&
      data.getUint8(3) === 0x46 &&
      data.getUint8(4) === 0x2d,
  },
  {
    format: "ZIP",
    check: (data: DataView) =>
      data.getUint8(0) === 0x50 && data.getUint8(1) === 0x4b,
  },
  {
    format: "GIF",
    check: (data: DataView) =>
      data.getUint8(0) === 0x47 &&
      data.getUint8(1) === 0x49 &&
      data.getUint8(2) === 0x46 &&
      data.getUint8(3) === 0x38,
  },
  {
    format: "PNG",
    check: (data: DataView) =>
      data.getUint8(0) === 0x89 &&
      data.getUint8(1) === 0x50 &&
      data.getUint8(2) === 0x4e &&
      data.getUint8(3) === 0x47,
  },
];

function detectFileType(data: ArrayBufferLike): Format["format"] {
  const dv = new DataView(data);
  return FORMATS.find((e) => e.check(dv))?.format ?? "UNKNOWN";
}
export { detectFileType };
