const midi = require('midi');

// Set up a new input.
const input = new midi.Input();

// Configure a callback.
input.on('message', (deltaTime, message) => {
  // The message is an array of numbers corresponding to the MIDI bytes:
  //   [status, data1, data2]
  // https://www.cs.cf.ac.uk/Dave/Multimedia/node158.html has some helpful
  // information interpreting the messages.
  console.log(`m: ${message} d: ${deltaTime}`);
});

// Open the first available input port.
input.openVirtualPort('midicircuit');

for (let i = 0; i < input.getPortCount(); i++) {
  console.log(`port ${i}: ${input.getPortName(i)}`);
}

// Close the port when done.
// setTimeout(function() {
//   input.closePort();
//   console.log('closing port...');
// }, 100000);
