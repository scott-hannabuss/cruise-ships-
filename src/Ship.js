function Ship(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
};

Ship.prototype.setSail = function () {
    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

    if (currentPortIndex === (itinerary.ports.length - 1)) {
        throw new Error('End of itinerary reached');
    }
    this.previousPort = this.currentPort;
    this.previousPort.removeShip(this);
    this.currentPort = null;

};

Ship.prototype.dock = function () {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
    this.currentPort = itinerary.ports[previousPortIndex + 1];
    this.currentPort.addShip(this);
};


function Port(name) {
    this.name = name;
    this.ships = [];
};

Port.prototype.addShip = function (ship) {
    this.ships.push(ship);
}

Port.prototype.removeShip = function (ship) {
    const shipindex = this.ships.indexOf(ship);
    this.ships.splice(shipindex, 1);
}

function Itinerary(ports) {
    this.ports = ports;
};

module.exports = {
    Ship,
    Port,
    Itinerary
};