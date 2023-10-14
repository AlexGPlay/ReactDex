export const selectIndex = (array, newIndex) => {
  if (newIndex < 0) return 0;
  if (newIndex >= array.length) return array.length - 1;
  return newIndex;
};
