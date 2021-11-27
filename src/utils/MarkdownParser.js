export const getNavItems = (postsContent) =>
  postsContent
    .split("\n")
    .filter(
      (line) => line.replaceAll(" ", "")[0] === "#" && !line.includes("####")
    )
    .map((line) => line.split("# "));
