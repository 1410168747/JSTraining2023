import { parseJSON } from "./index.ts";
describe('case1', () => {
  it('should return success response for valid JSON strings', () => {
    const json = '{"name": "John", "age": 30}';
    const result = parseJSON(json);
    expect(result).toEqual({ success: true, data: { name: 'John', age: 30 } });
  });

  it('case2', () => {
    const invalidJson = 'h';
    const result = parseJSON(invalidJson);
    expect(result.success).toEqual(false);
    expect(result.error).toBeInstanceOf(Error);
  });
});
