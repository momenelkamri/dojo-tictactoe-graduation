import { createBoard } from '@/index';

describe('Tic Tac Toe should', () => {
  test('create two-dimensional game board', () => {
    const expectedOutput = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];

    let result = createBoard();

    expect(result).toStrictEqual(expectedOutput);
  });

  test('create two-dimensional game board with one move for player X', () => {
    let player = 'X';
    const expectedOutput = [
      ['X', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];

    let result = createBoard(player);

    expect(result).toStrictEqual(expectedOutput);
  });
});
