/* globals describe it expect */

const { Port } = require('../src/Ship.js');
const { Itinerary } = require('../src/Ship.js');

describe('with ports and an itinerary', () => {
    let dover;
    let calais;
    let itinerary = jest.fn();

    beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port('Calais');
        itinerary = new Itinerary([dover, calais]);
    });

    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('can have ports', () => {
        expect(itinerary.ports).toEqual([dover, calais]);
    });
})