/* 날짜 형식을 YYYY-MM-DD로 맞춰주는 함수  */

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth().toString().padStart(2, '0');
  const day = date.getDay().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default formatDate;