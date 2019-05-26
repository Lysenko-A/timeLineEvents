export function createTimeLine(startTime, endTime) {
  const timeLine = [];

  for (let i = startTime; i <= endTime; i++) {
    timeLine.push(`${i.toString()}-00`);
  }

  timeLine.forEach(hour => {
    let hourWithMinute = hour.replace('00', '30');
    timeLine.push(hourWithMinute);
  });
  sortTimes(timeLine).pop();
  return timeLine;
}

function sortTimes(times) {

  return times.sort((a, b) => {
    const aParts = getParts(a);
    const bParts = getParts(b);

    return aParts[0] - bParts[0] || aParts[1] - bParts[1];
  });

  function getParts(time) {
    return time.split(' ')[0].split('-').map(x => +x);
  }
}

export function toHoursOrMinutes(milliseconds) {
  const time =  milliseconds / 60000;
  let minutes = time % 60;
  let hours = (time - minutes) / 60;

  if (minutes < 10) minutes = `0${minutes}`;
  if (hours < 10) hours = `0${hours}`;

  return `${hours}-${minutes}`;
}