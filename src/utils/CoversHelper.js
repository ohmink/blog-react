const sampleColors = [
  "#cc352b",
  "#bd2e25",
  "#b02820",
  "#e7af02",
  "#cc9a01",
  "#aa8100",
  "#3b358d",
  "#3f3991",
  "#1b7a8f",
  "#19748a",
  "#1a758b",
  "#6c9c2e",
  "#71a72f",
  "#7ab337",
  "gray",
];

const getTransfrom = (str) => str.match(/[0-9]+|[-0-9]+/g);
const cleanTemplate = () => {
  const template = document.querySelector(".templates");
  template.style.margin = "0";

  const header = document.querySelector(".header");
  const app = document.querySelector(".App");
  if (header) app.removeChild(header);
};
const setRightCovers = (covers, half) => {
  let width = 15,
    height = 20,
    x = -50,
    y = -30;
  let zIndex = covers.length;

  for (let i = 0; i <= half; i++) {
    const cover = covers[i];

    cover.style.width = `${width}rem`;
    cover.style.height = `${height}rem`;
    cover.style.transform = `translate(${x}%, ${y}%)`;
    cover.style.backgroundColor = sampleColors[i] ? sampleColors[i] : "black";
    cover.style.zIndex = zIndex;

    zIndex--;
    width -= 0.5;
    height--;
    x += 60;
    y += 20;
  }
};
const setLeftCovers = (covers, half) => {
  let x = -50,
    y = -30;
  for (let i = covers.length - 1, t = 1; i > half; i--, t++) {
    x -= 60;
    y -= 20;
    const cover = covers[i];
    const opposite = covers[t];

    cover.style.width = opposite.style.width;
    cover.style.height = opposite.style.height;
    cover.style.zIndex = opposite.style.zIndex;
    cover.style.transform = `translate(${x}%, ${y}%)`;
    cover.style.backgroundColor = sampleColors[i];
  }
};

export const viewInit = () => {
  cleanTemplate();

  const covers = document.querySelectorAll(".active");
  const half = Math.floor(covers.length / 2);

  setRightCovers(covers, half);
  setLeftCovers(covers, half);
};

const wheelRight = (covers) => {
  const origin = covers[0];
  const width = origin.style.width;
  const height = origin.style.height;
  const zIndex = origin.style.zIndex;
  const transform = origin.style.transform;

  for (let i = 0; i < covers.length - 1; i++) {
    const cover = covers[i];
    const next = covers[i + 1];

    cover.style.width = next.style.width;
    cover.style.height = next.style.height;
    cover.style.zIndex = next.style.zIndex;
    cover.style.transform = next.style.transform;
  }

  const last = covers[covers.length - 1];
  last.style.width = width;
  last.style.height = height;
  last.style.zIndex = zIndex;
  last.style.transform = transform;
};

const wheelLeft = (covers) => {
  const origin = covers[covers.length - 1];
  const width = origin.style.width;
  const height = origin.style.height;
  const zIndex = origin.style.zIndex;
  const transform = origin.style.transform;

  for (let i = covers.length - 1; i > 0; i--) {
    const cover = covers[i];
    const next = covers[i - 1];

    cover.style.width = next.style.width;
    cover.style.height = next.style.height;
    cover.style.zIndex = next.style.zIndex;
    cover.style.transform = next.style.transform;
  }

  const last = covers[0];
  last.style.width = width;
  last.style.height = height;
  last.style.zIndex = zIndex;
  last.style.transform = transform;
};

export const wheel = async (diff) => {
  const covers = document.querySelectorAll(".active");
  const maxCount = Math.floor(covers.length / 2);
  const num = Math.floor(Math.abs(diff) / 250) + 1;
  const count = num >= maxCount ? maxCount : num;

  if (diff > 0) for (let i = 0; i < count; i++) wheelRight(covers);
  else if (diff < 0) for (let i = 0; i < count; i++) wheelLeft(covers);
};
