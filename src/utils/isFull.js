export const isFull = (field) => {
  return field.find((item) => item.value === '');
};
