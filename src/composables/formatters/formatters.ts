export const useHtmlAttributeFormat = (string: string) => {
  return string.replace(/[^a-zA-Z]/g, "-").toLowerCase();
};
