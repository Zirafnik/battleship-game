function Ship(coordinates, type) {
    let hits = [];
    let sunk = false; 

    function hit(num) {
        hits.push(num);
    }

    function isSunk() {
        if(coordinates.every(coor => {
            return hits.includes(coor); 
        })) {
            sunk = true;
            return true;
        }
        return false;
    }

    return {
        type,
        coordinates,
        hit,
        hits,
        isSunk
    }
}

export default Ship;