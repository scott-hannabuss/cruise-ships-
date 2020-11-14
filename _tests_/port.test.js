/* globals describe it expect */

const { Port } = require('../src/Ship.js');

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
});

describe('Port', () => {
    it('has a name which can be altered', () => {
        const port = new Port('Dover');
        expect(port.name).toBe('Dover');
    });
});