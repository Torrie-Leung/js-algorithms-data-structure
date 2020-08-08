const names = ['Daveed', 'Lin', 'Reenem', 'Mario', 'Mario'];

for( const el of names){
  console.log(el);
}

const marioIndex = names.findIndex(el => el === 'Mario')
console.log(marioIndex);