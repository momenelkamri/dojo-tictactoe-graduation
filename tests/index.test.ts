import { TicTacToe } from '@/index';

describe('Tic Tac Toe should', () => {
  test('create two-dimensional game board', () => {
    const expectedOutput = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];

    const game = new TicTacToe();

    const result = game.createBoard();

    expect(result).toStrictEqual(expectedOutput);
  });

  test('create two-dimensional game board with one move for player X', () => {
    let player = 'X';
    const expectedOutput = [
      ['X', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];

    const game = new TicTacToe();

    let result = game.createBoard(player);

    expect(result).toStrictEqual(expectedOutput);
  });
});
