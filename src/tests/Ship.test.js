import Ship from '../factories/ShipFactory';

let carrier;

beforeEach(() => {
    return carrier = Ship([0, 1, 2,], 'carrier');
});

test('ship never hit', () => {
    expect(carrier.hits).toEqual([]);
});

test('ship hit', () => {
    carrier.hit(1);
    expect(carrier.hits).toEqual([1]);
});

test('ship is sunk', () => {
    carrier.hit(1);
    carrier.hit(0);
    carrier.hit(2);
    expect(carrier.isSunk()).toBe(true);
});

test('ship is not sunk', () => {
    carrier.hit(1);
    carrier.hit(2);
    expect(carrier.isSunk()).toBe(false);
});