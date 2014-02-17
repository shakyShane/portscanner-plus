var portScanner = require("./lib/index");

// Return named object props
portScanner.getPorts(3, 3000, 4000, ['controlPanel', 'socket', 'client']).then(function (ports) {
    console.log(ports.controlPanel);
    console.log(ports.socket);
    console.log(ports.client);
});

// Return an array
portScanner.getPorts(3, 3000, 4000).then(function (ports) {
    console.log(ports);
});