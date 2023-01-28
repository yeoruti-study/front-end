const EXPIRATION_DATE = 3;

export const getTotalTime = () => {
  const value = document.cookie.match('(^|;) ?' + 'totalTime' + '=([^;]*)(;|$)');
  return value ? parseInt(value[2]) : null;
};

export const setTotalTime = (totalTime) => {
  const expired = new Date();
  expired.setTime(expired.getTime() + EXPIRATION_DATE * 24 * 60 * 60 * 1000);
  document.cookie = `totalTime=${totalTime}; expires=${expired}`;
};
