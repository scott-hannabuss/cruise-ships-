(function exportController() {
  function Controller(ship) {
    this.ship = ship;
    this.initialiseSea();
    document.querySelector("#sailbutton").addEventListener("click", () => {
      this.setSail();
    });
  }

  // sets background animation to simulate the sea

  Controller.prototype.initialiseSea = function initaliseSea() {
    const backgrounds = [
      "./images/images/water0.png",
      "./images/images/water1.png",
    ];
    let backgroundIndex = 0;
    window.setInterval(() => {
      document.querySelector("#viewport").style.backgroundImage = `url('${
        backgrounds[backgroundIndex % backgrounds.length]
      }')`;
      backgroundIndex += 1;
    }, 1000);
  };

  // renders ports

  Controller.prototype.renderPorts = function (ports) {
    const portsElement = document.querySelector("#ports");
    portsElement.style.width = "0px";
    ports.forEach((port, index) => {
      const newPortElement = document.createElement("div");
      newPortElement.dataset.portName = port.name;
      newPortElement.dataset.portIndex = index;
      newPortElement.className = "port";
      portsElement.appendChild(newPortElement);
      const portsElementWidth = parseInt(portsElement.style.width, 10);
      portsElement.style.width = `${portsElementWidth + 256}px`;
    });
  };

  // renders ship

  Controller.prototype.renderShip = function () {
    const ship = this.ship;
    const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const portElement = document.querySelector(
      `[data-port-index='${shipPortIndex}']`
    );
    const shipElement = document.querySelector("#ship");
    shipElement.style.top = `${portElement.offsetTop}px`;
    shipElement.style.left = `${portElement.offsetLeft}px`;
    shipElement.style.top = `${portElement.offsetTop + 32}px`;
    shipElement.style.left = `${portElement.offsetLeft - 32}px`;
  };

  // moves ship to next port on GUI

  Controller.prototype.setSail = function () {
    this.createDisplay();
    const ship = this.ship;
    const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const nextPortIndex =
      currentPortIndex >= 0 ? currentPortIndex + 1 : undefined;
    const nextPortElement = document.querySelector(
      `[data-port-index='${nextPortIndex}']`
    );
    const isLastPort = currentPortIndex === ship.itinerary.ports.length - 1;
    if (!nextPortElement || isLastPort) {
      this.renderMessage("You have reached the end of the line");
    } else {
      this.renderMessage(`Now departing ${ship.currentPort.name}`);

      const shipElement = document.querySelector("#ship");
      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);
        if (shipLeft === nextPortElement.offsetLeft - 32) {
          ship.setSail();
          ship.dock();
          this.renderMessage(`Docked at ${ship.currentPort.name}`);
          clearInterval(sailInterval);
        }

        shipElement.style.left = `${shipLeft + 1}px`;
      }, 20);
    }
  };
  Controller.prototype.renderMessage = function (message) {
    const messageElement = document.createElement("div");
    messageElement.id = "message";
    messageElement.innerHTML = message;

    const viewport = document.querySelector("#viewport");
    viewport.appendChild(messageElement);

    setTimeout(() => {
      viewport.removeChild(messageElement);
    }, 2000);
  };

  Controller.prototype.createDisplay = function () {
    const ship = this.ship;
    const portIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const nextPort = ship.itinerary.ports.indexOf(ship.currentPort) + 1;
    const nextPortElement = document.getElementById("nextPort");
    if (portIndex < ship.itinerary.ports.length - 1) {
      console.log(ship.itinerary.ports.length);
      nextPortElement.innerHTML = `Next Destination: ${ship.itinerary.ports[nextPort].name}`;
    } else {
      nextPortElement.innerHTML = "This is the final destination.";
    }
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
