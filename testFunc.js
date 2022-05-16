// const exportedAdder = (a, b) => {
//   console.log(this);
//   console.log(a + b);
// };
function adder(a, b) {
  //console.log(a + b);
  //console.log(this);
  return a + b;
}

export { adder };
