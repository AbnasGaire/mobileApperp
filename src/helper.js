import moment from "moment";
export function Time(time) {
  let a = time.split(':');
  return a[0] + ':' + a[1];
}
export function TimeinModulation(timeValue) {
  let time = timeValue.split(':');
  let returnTime = '';
  if (time[0] > 12) {
    time[0] = time[0] - 12;
    returnTime = time[0] + ':' + time[1] + ' PM';
  } else {
    if (time[0] == '00') {
      returnTime = 12 + ':' + time[1] + ' AM';
    } else {
      returnTime = time[0] + ':' + time[1] + ' AM';
    }
  }
  return returnTime;
}

export function AvatarName(name) {
  let short = [];
  let a = name.split(' ');
  for (var i = 0; i < a.length; i++) {
    short.push(a[i].charAt(0, 1));
  }
  return short;
}

export function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
}

export function formatTime(date) {
  var d = new Date(date),
    hour = '' + (d.getHours());
    min = '' + d.getMinutes();
  if (hour.length < 2) hour = '0' + hour;
  if (min.length < 2) min = '0' + min;
  return [hour, min].join(':');
}

export function getNumberOfHours(from_time,to_time){
        let diff = moment(to_time, 'HH:mm').diff(moment(from_time, 'HH:mm'))
        let d = moment.duration(diff);
        let hours=Math.floor(d.asHours())
        return hours;
}
