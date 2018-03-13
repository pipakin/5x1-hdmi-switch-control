#!/usr/bin/env node

var SerialPort = require('serialport');

var program = require('commander');

program
  .version('1.0.0')
  .option('-o, --turnon', 'turn display on')
  .option('-f, --turnoff', 'turn display off')
  .option('-i, --input <number>', 'switch to input by number')
  .option('-p, --port <port>')
  .parse(process.argv)


function sendCommand(command, portName) {

  port.write(command, "ascii");
  port.drain(function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
  });
}

function processOptions(portName) {
  var port = new SerialPort(portName, {
    baudRate: 9600
  });
  if(program.turnon && program.turnoff) {
    console.error("Con't turn display on and off!");
    return;
  }
  if(program.turnon) {
    port.write("poweronR", "ascii");
  }
  if(program.turnoff) {
    port.write("poweroffR", "ascii");
  }
  if(program.input) {
    port.write("port" + (program.input - 1) + "R", "ascii");
  }
  port.drain(function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
  });
}

if(program.port) {
  processOptions(program.port);
} else {
  SerialPort.list(function(err, ports) {
    if(err) {
      console.error("Unable to list ports!");
      return;
    }
    if(ports.length === 0) {
      console.error("No COM ports to use!");
      return;
    }
    console.warn("Automatically using port: " + ports[0].comName);
    processOptions(ports[0].comName);
  });
}
