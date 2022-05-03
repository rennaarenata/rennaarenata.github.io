const execSync = require('child_process').execSync;


const output = execSync('ls', { encoding: 'utf-8' });
console.log('Output was:\n', output);
                                                                                           //no harm intende
