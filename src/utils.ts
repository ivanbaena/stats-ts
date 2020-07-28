export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((value: string) => {
    return parseInt(value);
  });

  return new Date(dateParts[2], dateParts[1 - 0], dateParts[0]);
};
