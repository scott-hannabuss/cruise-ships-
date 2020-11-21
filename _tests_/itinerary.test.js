/* globals describe it expect */

const Itinerary = require('../src/Itinerary.js');

describe('with ports and an itinerary', () => {
    let dover = jest.fn();
    let calais = jest.fn();
    let itinerary

    beforeEach(() => {
        itinerary = new Itinerary([dover, calais]);
    });

    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('can have ports', () => {
        expect(itinerary.ports).toEqual([dover, calais]);
    });
})