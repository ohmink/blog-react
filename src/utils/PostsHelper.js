export const getPostSummary = (contents) =>
  contents.split("\n").slice(0, 3).join(" ").substring(0, 200);

export const getUpdateTime = (updateTime) => {
  const time = new Date(updateTime);
  const year = time.getFullYear();

  let month = time.getMonth() + 1;
  if (month < 10) month = `0${month}`;

  let day = time.getDate();
  if (day < 10) day = `0${day}`;

  let hour = time.getHours();
  if (hour < 12) hour = `오전 ${hour}`;
  else if (hour === 12) hour = `오후 ${hour}`;
  else hour = `오후 ${hour - 12}`;

  let minute = time.getMinutes();
  if (minute < 10) minute = `0${minute}`;

  return `${year}-${month}-${day} ${hour}:${minute}`;
};
