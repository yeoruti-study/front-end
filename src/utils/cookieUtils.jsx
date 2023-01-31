export const getCookie = (key) => {
  const cookieString = document.cookie.split(';').filter(c => c.split('=')[0].trim() === key);
  const value = cookieString[0]?.split('=')[1];
  return value ? value : null;
};

export const setCookie = (key, value, expiration_date) => {
  const expired = new Date();
  expired.setTime(expired.getTime() + expiration_date * 24 * 60 * 60 * 1000);
  document.cookie = `${[key]}=${value}; expires=${expired}`
};