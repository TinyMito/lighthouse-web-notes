try {
  const fs = require('fs');

  const data = fs.readFileSync('samples.txt', 'utf-8');
  console.log('Data: ', data);
} catch (error) {
  console.log(error);
}
console.log('Next Function');