const midi = require('midi');

const input = new midi.Input();

// Configure a callback.
input.on('message', (deltaTime, message) => {
    console.log(`m: ${message} d: ${deltaTime}`);
});

// Create a virtual input port.
input.openVirtualPort("Test Input");

// A midi device "Test Input" is now available for other
// software to send messages to.

// ... receive MIDI messages ...

// Close the port when done.
// input.closePort();
