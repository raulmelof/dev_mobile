export const unique = <T>(arr: T[]): T[] => {
  return [...new Set(arr)];
};

export const groupBy = <T, K extends keyof T>(arr: T[], key: K): Record<string, T[]> => {
  return arr.reduce((acc, obj) => {
    const groupKey = String(obj[key]);
    
    (acc[groupKey] = acc[groupKey] || []).push(obj);
    return acc;
  }, {} as Record<string, T[]>);
};

export const sumBy = <T, K extends keyof T>(arr: T[], key: K): number => {
  return arr.reduce((total, obj) => {
    const value = obj[key];
    const numericValue = typeof value === 'number' ? value : 0;
    return total + numericValue;
  }, 0);
};