const nums = [1,2,3];
// reutrn a new array
const doubledNums = nums.map(num => {
  return num * 2
})
// console.log(doubledNums);

const squad = [
  {name: 'Theseus', born: 1891,id:222},
  {name: 'Newt', born: 1899,id:107}
];
// add new info
const squadAgeIncluded = squad.map(ppl => {
  return {
    name: ppl.name,
    born: ppl.born,
    id: ppl.id,
    age: new Date().getFullYear() - ppl.born
  }
})

// console.log(squadAgeIncluded);

// remove info
const perIdOnly = squad.map(ppl => {
  return ppl.id
})
console.log(perIdOnly);