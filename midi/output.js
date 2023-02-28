const midi = require('midi');

const output = new midi.Output();

for (let i = 0; i < output.getPortCount(); i++) {
  if (output.getPortName(i) === 'midicircuit') {
    console.log(`port ${i}: ${output.getPortName(i)}`);
    output.openPort(i);
    output.sendMessage([176,22,1]);
    output.closePort();
  }
}
