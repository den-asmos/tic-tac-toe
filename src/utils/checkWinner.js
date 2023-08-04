export const checkWinner = (field) => {
  return (
    (field[0].value === field[1].value &&
      field[1].value === field[2].value &&
      field[0].value !== '') ||
    (field[1].value === field[4].value &&
      field[4].value === field[7].value &&
      field[1].value !== '') ||
    (field[2].value === field[5].value &&
      field[5].value === field[8].value &&
      field[2].value !== '') ||
    (field[2].value === field[4].value &&
      field[4].value === field[6].value &&
      field[2].value !== '') ||
    (field[6].value === field[7].value &&
      field[7].value === field[8].value &&
      field[6].value !== '') ||
    (field[0].value === field[4].value &&
      field[4].value === field[8].value &&
      field[0].value !== '') ||
    (field[0].value === field[3].value &&
      field[3].value === field[6].value &&
      field[0].value !== '') ||
    (field[3].value === field[4].value &&
      field[4].value === field[5].value &&
      field[3].value !== '')
  );
};
