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