const namesDiv = document.querySelector("#names");

const names = [
 { first: "Callum", last: "Turner" },
 { first: "Theseus", last: "Scamander" },
 { first: "Newt", last: "Scamander" }
];

let template = "";
// fill out teplate string
names.forEach((name,i) => {
  template += `<div>Hi~ my name is ${name.first} ${name.last} postion:${i+1}</div>`
})
namesDiv.innerHTML = template