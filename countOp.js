// alwasy just 3 operation, no matter how large N is
const sumUpTo = n => {
  return ( n * (n + 1) / 2)
}

// for loop sumUp- takes 1* N operations
const sumupFor = n => {
  let total = 0
  for(let i = 0; i <= n; i++){
    total += 1;
  }
  return total
}

let time1,time2
// let arg = 1990021519820106
let arg = 10000000000

time1 = Date.now();
sumUpTo(arg)
time2 = Date.now();
console.log(`sumUpTo() uses ${(time2 - time1) / 1000} seconds to count ${arg}`) // 0sec

time1 = Date.now();
sumupFor(arg)
time2 = Date.now();
console.log(`sumupFor() uses ${(time2 - time1) / 1000} seconds to count ${arg}`) // 11.288 sec