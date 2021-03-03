export const americanTime = (time) => {
  if (!time) return '';

  let hours = +time.slice(0, 2);
  hours = hours < 13 ? hours : hours - 12;
  const aTime = time.replace(
    /(\d{2})(\d{2})/,
    `${hours}:$2${+time < 1300 ? 'AM' : 'PM'}`,
  );

  return aTime;
};
