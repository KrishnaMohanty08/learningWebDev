const os = require('os');

console.log('Platform:', os.platform());
console.log('CPU Architecture:', os.arch());
console.log('OS Type:', os.type());
console.log('Hostname:', os.hostname());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());
console.log('Uptime (seconds):', os.uptime());
console.log('Home Directory:', os.homedir());
console.log('Temp Directory:', os.tmpdir());
console.log('Endianness:', os.endianness());
console.log('EOL Marker:', JSON.stringify(os.EOL));
