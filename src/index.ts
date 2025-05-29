export const createBoard = (player: string = ' ') => {
  if (player === 'X') {
    return [
      ['X', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
  }

  return [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ];
};
