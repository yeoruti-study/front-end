/* count(초)를 입력하면 시-분-초를 문자열 형태로 변환한 객체{HH, MM, SS, count}가 반환되는 함수 */

const changeCountToTime = (count) => {
  const hour = parseInt(count / 3600).toString().padStart(2, '0');
  const min = parseInt((count % 3600) / 60).toString().padStart(2, '0');
  const sec = parseInt(count % 60).toString().padStart(2, '0');
  return { hour, min, sec, count };
};

export default changeCountToTime;