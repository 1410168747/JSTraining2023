/**
 * This file contains unit tests for the functions CRLFtoLF and LFtoCRLF.
 */

import {CRLFtoLF, LFtoCRLF} from './index.ts';

describe("This file contains unit tests for the functions CRLFtoLF and LFtoCRLF.", () => {

  it("Test case to verify that CRLFtoLF and LFtoCRLF functions are inverse of each other.", () => {
    const input = 'a\r\nb\r\nc\r\n'
    const actual = LFtoCRLF(CRLFtoLF(input));
    expect(actual).toBe(input);
  });

  it("Test case to verify that CRLFtoLF and LFtoCRLF functions are inverse of each other when input contains multiple consecutive carriage returns.", () => {
    const input = 'a\r\r\nb\r\r\nc\r\r\n'
    const actual = LFtoCRLF(CRLFtoLF(input));
    expect(actual).toBe(input);
  });
});