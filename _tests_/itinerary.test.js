const { Itinerary } = require('../src/Ship.js');

describe('Itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
});