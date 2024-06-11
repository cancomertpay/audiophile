export const removeKeywords = (name) => {
  return name
    .replace(/(Headphones|Earphones|Speaker|Mark|Wireless)/g, "")
    .trim();
};
