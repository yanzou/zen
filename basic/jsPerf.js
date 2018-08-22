let array = [];

let includePerf;
let indexPerf;

let i = 0;
while (i < 10000000) {
  array.push(i++);
}

let now = window.performance.now();
if(array.includes(9999999) ){
  includePerf = window.performance.now();
} 

if(array.indexOf(9999999) > -1 ){
  indexPerf = window.performance.now();
}

console.log('includePerf: ', includePerf - now);
console.log('indexPerf: ', indexPerf - now);