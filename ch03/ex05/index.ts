export const CRLFtoLF = (str: string): string => str.replace(/\r\n/g, '\n');
export const LFtoCRLF = (str: string): string => str.replace(/\n/g, '\r\n');