const colors = ['red','green','blue'];

// for(let i = 0; i < colors.length; i++){
//   console.log(colors[i]);
// }

// if you using it a lot name it otherwise anonymou arrowfunc is ok
// function clgColor(color){
//   console.log(color);
// }
// colors.forEach(clgColor)

colors.forEach(color => console.log(color))

const nums = [1,2,3]
const doubledNums = []
nums.forEach(num => doubledNums.push(num*2))
console.log(doubledNums);

const n = [1,2,1,1,1,1,1,]
let hasEven = false

// for loops do not require an existing array to run
// you can only use a break statement inside a for/while loop
for(let i = 0; i < n.length; i++){
  console.log(`this for loop has ran ${i + 1} times`)
  if(n[i] % 2 == 0){
    hasEven = true
    break
  }
}
console.log(hasEven);