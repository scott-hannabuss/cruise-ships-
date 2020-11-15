/* globals describe it expect */

const { Ship } = require('../src/Ship.js');
const { Port } = require('../src/Ship.js');
const { Itinerary } = require('../src/Ship.js');


describe('with ports and an itinerary', () => {
    let ship;
    let dover;
    let calais;
    let itinerary;

    beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port('Calais');
        itinerary = new Itinerary([dover, calais]);
        ship = new Ship(itinerary);
    });

    it('can be instantiated', () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        expect(ship.currentPort).toBe(dover);
    });

    it('can dock at a different port', () => {
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(calais);
        expect(calais.ships).toContain(ship);
    })

    it('can set sail', () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        expect(dover.ships).not.toContain(ship);
    });

    it('cant set sail further than its itinerary', () => {
        ship.setSail();
        ship.dock();
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });

    it('gets added to port on instantiation', () => {
        expect(dover.ships).toContain(ship);
    });
})

