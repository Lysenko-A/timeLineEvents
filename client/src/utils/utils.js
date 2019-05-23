export function createTimeLine(startTime, endTime) {
    const timeLine = [];

    for(let i = startTime; i <= endTime; i++  ) {
        timeLine.push(i.toString());
    }

    timeLine.forEach(hour => {
        let hourWithMinute = `${hour}-30`;
        timeLine.push(hourWithMinute);
    });
    sortTimes(timeLine).pop();
    return timeLine;
};

function sortTimes(times) {

    return times.sort((a, b) => {
        const aParts = getParts(a);
        const bParts = getParts(b);

        return aParts[0] - bParts[0] || aParts[1] - bParts[1];
    });

    function getParts(time) {
        return time.split(' ')[0].split('-').map(x => +x);
    }
};