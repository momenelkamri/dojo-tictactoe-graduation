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
});
