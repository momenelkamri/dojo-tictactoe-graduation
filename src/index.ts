export class TicTacToe {
  private board: string[][];

  constructor() {
    this.board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
  }

  public createBoard(player: string = ' ') {
    if (player === 'X') {
      this.board[0][0] = 'X';
    }

    return this.board;
  }

  winner(player: string): string {
    if (player === 'X') {
      return 'X';
    }
    return ' ';
  }

  printBoard() {
    console.log(this.board.map(row => row.join('|')).join('\n'));
  }
}

const game = new TicTacToe();
game.createBoard('X');
game.printBoard();