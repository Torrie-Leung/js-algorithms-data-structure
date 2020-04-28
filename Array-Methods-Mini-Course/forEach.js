const colors = ['red','green','blue'];

// for(let i = 0; i < colors.length; i++){
//   console.log(colors[i]);
// }

// if you using it a lot name it otherwise anonymou arrowfunc is ok
function clgColor(color){
  console.log(color);
}
colors.forEach(clgColor)

colors.forEach(color => console.log(color))