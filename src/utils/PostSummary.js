export const getPostSummary = (contents) => {
  console.log(typeof contents);
  const contentsLines = contents.split("\n").slice(0, 4);
  return contentsLines.join(" ");
};
