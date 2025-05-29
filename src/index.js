"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBoard = void 0;
const createBoard = (player = ' ') => {
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
exports.createBoard = createBoard;
