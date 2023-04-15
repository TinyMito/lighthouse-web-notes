const mean = { 1: 3, 2: 5, 3:5};
let sum = 0;
let count = 0;

for (const key in mean) {
  sum += mean[key];
  count++;
}

const average = (sum / count);

console.log(average);