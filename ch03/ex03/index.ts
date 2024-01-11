const threshold = Math.pow(10, -10);

export const isEqual = (num1: number, num2: number): boolean => Math.abs(num1 - num2) < threshold;