"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("@/index");
describe('Tic Tac Toe should', () => {
    test('create two-dimensional game board', () => {
        const expectedOutput = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' '],
        ];
        let result = (0, index_1.createBoard)();
        expect(result).toStrictEqual(expectedOutput);
    });
    test('create two-dimensional game board with one move for player X', () => {
        let player = 'X';
        const expectedOutput = [
            ['X', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' '],
        ];
        let result = (0, index_1.createBoard)(player);
        expect(result).toStrictEqual(expectedOutput);
    });
});
