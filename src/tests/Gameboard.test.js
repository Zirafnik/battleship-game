import Gameboard from '../factories/GameboardFactory';

let gameboard = Gameboard();
let board = gameboard.board;

test('record ship 1', () => {
    gameboard.recordShipCoor([12, 13, 14], 'destroyer');
    expect(board[12].hasShip).toBe(true);
    expect(board[13].hasShip).toBe(true);
    expect(board[14].hasShip).toBe(true);

    expect(board[12].shipName).toBe('destroyer');
    expect(board[13].shipName).toBe('destroyer');
    expect(board[14].shipName).toBe('destroyer');

    expect(gameboard.ships[0].type).toBe('destroyer');
});

test('receive attack 13', () => {
    gameboard.receiveAttack(13);

    expect(board[13].isShot).toBe(true);
    expect(gameboard.ships[0].hits).toEqual([13]);
});

test('receive attack 26', () => {
    gameboard.receiveAttack(26);

    expect(board[26].isShot).toBe(true);
    expect(gameboard.misses).toEqual([26]);
});

test('receive attack 26 again', () => {
    expect(gameboard.receiveAttack(26)).toBe('Already shot');
});

test('not all sunk', () => {
    expect(gameboard.allSunk()).toBe(false);
});

test('all sunk', () => {
    gameboard.receiveAttack(12);
    gameboard.receiveAttack(1);
    gameboard.receiveAttack(14);
    
    expect(gameboard.allSunk()).toBe(true);
});