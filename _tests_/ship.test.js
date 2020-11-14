/* globals describe it expect */

const { Ship } = require('../src/Ship.js');
const { Port } = require('../src/Ship.js');

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
});

describe('Ship', () => {
    it('has a starting port', () => {
        const ship = new Ship(Port);
        expect(ship.startingPort).toBe(Port);
    });
});

describe('Ship', () => {
    it('can set sail', () => {
        const ship = new Ship(Port);

        ship.setSail();

        expect(ship.startingPort).toBeFalsy();
    })
})

describe('Ship', () => {
    it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);
        const calais = new Port('calais');
        ship.dock(calais);

        expect(ship.currentPort).toBe(calais);
    })
})