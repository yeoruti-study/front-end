// 한국 기준 time-offset
const TIME_OFFSET = 1000 * 60 * 60 * 9;
const UTC_toKR = (date: Date) => {
  const formattedDate = new Date(date.getTime() + TIME_OFFSET);
  return formattedDate.toISOString();
};

export default UTC_toKR;