const args = process.argv.slice(2);
const seconds = [];

for (const second of seconds) {
  if (!NaN(second) && second >= 1) {

    setTimeout(() => {
      process.stdout.write('\x07');
     }, second * 1000);
  }
};