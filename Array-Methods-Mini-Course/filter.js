const squad = [
  {name: 'Mario', born: 1975, gender: 'male', income: 23000},
  {name: 'Kuba', born: 1965, gender: 'male', income: 25000},
  {name: 'Luigi', born: 1995, gender: 'male', income: 13000},
  {name: 'Peach', born: 1985, gender: 'female', income: 230000},
  {name: 'Gnome', born: 2000, gender: 'male', income: 23000},
];

const agedRichMale = squad.filter(member => {
  const age = new Date().getFullYear() - member.born;
  return age >= 40 && member.income > 10000
})
console.log(agedRichMale);