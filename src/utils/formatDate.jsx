const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth().toString().padStart(2, '0');
  const day = date.getDay().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default formatDate;