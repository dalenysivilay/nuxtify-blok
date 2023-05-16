export const sanitizeString = (str: string): string => {
  return String(str).trim();
};

export const sanitizeNumber = (num: number): number => {
  return Number(num);
};
