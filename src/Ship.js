function Ship(startingPort) {
    this.startingPort = startingPort;
    this.currentPort = '';
};
Ship.prototype.setSail = function () {
    this.startingPort = false;
};
Ship.prototype.dock = function (port) {
    this.currentPort = port;
};


function Port(name) {
    this.name = name;
};

function Itinerary(dock) {
    this.dock = dock;
}

module.exports = {
    Ship,
    Port,
    Itinerary
};