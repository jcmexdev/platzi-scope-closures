const fruits = () => {
  var fruit = 'apple';
  console.log(fruit);
};

fruits();
console.log(fruit);

const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  //no se puede volver a declarar, var si
  //   let y = 2;
  console.log(x);
  console.log(y);
};
anotherFunction();
