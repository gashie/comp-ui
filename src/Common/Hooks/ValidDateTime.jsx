import moment from "moment";

export const handleValidTime = (time) => {
  const time1 = new Date(time);
  const getHour = time1.getUTCHours();
  const getMin = time1.getUTCMinutes();
  const getTime = `${getHour}:${getMin}`;
  var meridiem = "";
  if (getHour >= 12) {
    meridiem = "PM";
  } else {
    meridiem = "AM";
  }
  const updateTime = moment(getTime, "hh:mm").format("hh:mm") + " " + meridiem;
  return updateTime;
};

export const handleValidDate = (date) => {
  const date1 = moment(new Date(date)).format("DD MMM Y");
  return date1;
};
