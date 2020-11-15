/* globals describe it expect */

const { Port } = require('../src/Ship.js');

describe('with ports and an itinerary', () => {
    let ship = jest.fn();
    let calais;
    let port;

    beforeEach(() => {
        port = new Port('Dover');
        calais = new Port('Calais');
    });

    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('has a name which can be altered', () => {
        expect(port.name).toBe('Dover');
    });


    it('can add a ship to its properties', () => {
        port.addShip(ship);
        expect(port.ships).toContain(ship);
    });

    it('can remove a ship from its proprties', () => {
        const titanic = {};
        const queenMary = {};
        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);
        expect(port.ships).toEqual([titanic]);
    });
});