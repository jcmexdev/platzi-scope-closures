//con function scope
// const fruits = () => {
//   if (true) {
//     var fruits1 = 'apple';
//     var fruits2 = 'banana';
//     var fruits3 = 'kiwi';
//   }
//   console.log(fruits1);
//   console.log(fruits2);
//   console.log(fruits3);
// };

// fruits();

//con block scope
const fruits = () => {
  if (true) {
    var fruits1 = 'apple';
    const fruits2 = 'banana';
    let fruits3 = 'kiwi';
    console.log(fruits2);
    console.log(fruits3);
  }
  console.log(fruits1);
};

fruits();

const anotherFunction = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherFunction();
