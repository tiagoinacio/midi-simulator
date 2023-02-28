const easymidi = require('easymidi');
const virtualOutput = new easymidi.Output('Virtual output name', true);
setTimeout(() => {
  virtualOutput.send('cc', {
    controller: 86,
    value: 86,
  });
}, 15000)
