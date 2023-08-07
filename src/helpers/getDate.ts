export const getDate = (str: string): string[] => {
  const regex = /\b\d{1,2}\/\d{1,2}\/\d{4}\b/g;
  const match = str.match(regex);
  if (!match) {
    return [];
  }
  return match;
};
