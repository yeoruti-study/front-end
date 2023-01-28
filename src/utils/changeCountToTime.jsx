const changeCountToTime = (count) => {
  const hour = parseInt(count / 3600).toString().padStart(2, '0');
  const min = parseInt((count % 3600) / 60).toString().padStart(2, '0');
  const sec = parseInt(count % 60).toString().padStart(2, '0');
  return { hour, min, sec, count };
};

export default changeCountToTime;