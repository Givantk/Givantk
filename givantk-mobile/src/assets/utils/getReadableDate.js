const isToday = (someDate) => {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};

const getReadableDate = (date) => {
  const readableHourDate = `${date.getHours()}:${date.getMinutes()}`;
  const readableYearDate = ` (${date.getDate()}-${date.getMonth() +
    1}-${date.getFullYear()})`;

  if (isToday(date)) {
    return readableHourDate;
  }
  return readableHourDate + readableYearDate;
};

export default getReadableDate;
