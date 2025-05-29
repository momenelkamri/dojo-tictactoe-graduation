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

// console.log(createBoard());
console.log(createBoard('X'));