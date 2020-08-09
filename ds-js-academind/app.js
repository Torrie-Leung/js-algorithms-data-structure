// array
const names = ['Daveed', 'Lin', 'Reenem', 'Mario', 'Mario'];

for( const el of names){
  console.log(el);
}

const marioIndex = names.findIndex(el => el === 'Mario')
console.log({marioIndex});

//set
const ids = new Set();

ids.add('jimmy')
ids.add(1)
ids.add('bb2')
ids.add(1)
for( const el of ids){
  console.log(el);
}
console.log(ids.has('bb2'));
ids.delete('bb2')
console.log(ids.has('bb2'));

// map
const resultData = new Map()
resultData.set('average', 1.62)
resultData.set('lastResult', null)

const germany = {name: 'Germany', population: 82}

resultData.set(germany, 0.89)
resultData.set('average', 0.62) // overwrite the same first one
for(const el of resultData){
  console.log(el);
}