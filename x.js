// const e = 10;

// function sum() {
//   return function (a) {
//     return function (b) {
//       return function (d) {
//         return a + b + d + e;
//       };
//     };
//   };
// }

// console.log(sum()(2)(3)(4));

// for (var i = 0; i < 5; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   })(i);
// }

// function counter() {
//   var _counter = 0;

//   function add(number) {
//     _counter += number;
//   }

//   function retrieve() {
//     return _counter;
//   }

//   return {
//     add,
//     retrieve,
//   };
// }

// var c = counter();
// c.add(10);
// c.add(5);

// console.log(c.retrieve());

// let view;
// function likeTheVideo() {
//   let count = 0;
//   return function () {
//     if (count > 0) {
//       console.log("already liked");
//     } else {
//       console.log("like the video");
//       count++;
//     }
//   };
// }

// var ltv = likeTheVideo();
// ltv();
// ltv();
