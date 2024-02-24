import { Polar } from './index.ts';

// Write your test cases using a testing framework like Jest
describe('Test Suite', () => {
  it('(1,0)=(1,0)', () => {
    // Arrange
    const p = new Polar(1, 0);

    // Assert
    expect(p.x).toBe(1);
    expect(p.y).toBe(0);
  });

  it('(1,pi/2)=(0,1)', () => {
    // Arrange
    const p = new Polar(1, Math.PI / 2);

    // Assert
    expect(p.x).toBeCloseTo(0);
    expect(p.y).toBeCloseTo(1);
  });

  it('(1,pi)=(-1,0)', () => {
    // Arrange
    const p = new Polar(1, Math.PI);

    // Assert
    expect(p.x).toBeCloseTo(-1);
    expect(p.y).toBeCloseTo(0);
  });

  it('(1,3pi/2)=(-1,0)', () => {
    // Arrange
    const p = new Polar(1, (Math.PI * 3) / 2);

    // Assert
    expect(p.x).toBeCloseTo(0);
    expect(p.y).toBeCloseTo(-1);
  });

  it('(1,2pi)=(1,0)', () => {
    // Arrange
    const p = new Polar(1, Math.PI * 2);

    // Assert
    expect(p.x).toBeCloseTo(1);
    expect(p.y).toBeCloseTo(0);
  });

  it('(2^(1/2),pi/4)=(1,1)', () => {
    // Arrange
    const p = new Polar(2 ** (0.5), Math.PI /4);

    // Assert
    expect(p.x).toBeCloseTo(1);
    expect(p.y).toBeCloseTo(1);
  });
});
