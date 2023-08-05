export const truncateString = (str: string, maxLength:number):string => {
  if (str.length <= maxLength) {
    return str;
  }
  const lastSpaceIndex:number = str.lastIndexOf(' ', maxLength);
  if (lastSpaceIndex <= 0) {
    return str.slice(0, maxLength - 1) + '...';
  }
  let truncatedStr: string = str.slice(0, lastSpaceIndex);
  const lastChar: string = truncatedStr[truncatedStr.length - 1];
  if (!lastChar.match(/[A-Za-z0-9]/)) {
    truncatedStr = truncatedStr.slice(0, -1);
  }
  return truncatedStr + '...';
};