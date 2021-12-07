export const getPostSummary = (contents) =>
  contents
    .substring(0, 1000)
    .replace(/\([^)]+\)/g, "")
    .replace(/[#*-`]/g, "")
    .substring(0, 195) + ".....";

export const getUpdateTime = (updateTime) => {
  const time = new Date(updateTime);
  const year = time.getFullYear();

  let month = time.getMonth() + 1;
  if (month < 10) month = `0${month}`;

  let day = time.getDate();
  if (day < 10) day = `0${day}`;

  return `${year}-${month}-${day}`;
};

export const getTagList = (resData) => {
  const tagArray = [];
  const countMap = [];
  let total = 0;

  resData.forEach((r) => {
    if (r.tag) {
      total++;

      const tags = r.tag.split(" ");
      tags.forEach((tag) => {
        if (tagArray.includes(tag)) {
          countMap[tag]++;
        } else {
          tagArray.push(tag);
          countMap[tag] = 1;
        }
      });
    }
  });

  tagArray.splice(0, 0, "전체보기");
  countMap[tagArray[0]] = total;

  return [tagArray, countMap];
};
