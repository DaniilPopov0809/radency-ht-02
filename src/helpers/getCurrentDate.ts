export const getCurrentDate = (): string => {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const month: number = date.getMonth();
  const day: number = date.getDate();
  const year: number = date.getFullYear();

  return `${months[month]} ${day}, ${year}`;
};
