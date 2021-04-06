import Ship from './ShipFactory';

function Gameboard() {
    let board = [];
    for(let i=0; i<100; i++) {
        board.push({hasShip: false, isShot: false, shipName: ''});
    }

    let ships = [];
    let misses = [];


    //  !!!!!
    //can place 2 ships in one place currently
    function recordShipCoor(coordinates, type) {
        let ship = Ship(coordinates, type);
        ships.push(ship);
        
        coordinates.forEach(coor => {
            board[coor].hasShip = true;
            board[coor].shipName = type;
        });
    }

    function receiveAttack(coor) {
        if(board[coor].isShot === false) {
            if(board[coor].hasShip) {
                let ship = ships.filter(ship => ship.type === board[coor].shipName)[0];
                ship.hit(coor);
                board[coor].isShot = true;
            } else {
                misses.push(coor);
                board[coor].isShot = true;
            }
        } else {
            return 'Already shot';
        }
    }

    function allSunk() {
        return ships.every(ship => ship.isSunk());
    }

    return {
        board,
        ships,
        misses,
        recordShipCoor,
        receiveAttack,
        allSunk
    };
}

export default Gameboard;