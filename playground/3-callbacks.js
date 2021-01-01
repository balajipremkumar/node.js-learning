// console.log("check");

// setTimeout(() => {
//   console.log("Three seconds are up");
// }, 3000);

// const names = ["bala", "Deepika", "dhruv"];
// const shortNames = names.filter((name) => {
//   return name.length <= 5;
// });

// console.log(shortNames);

// const geoCode = (address, callback)=>{
//    setTimeout(()=>{
//       const data = {
//         lattitude = 0,
//         longtitude = 0
//       }

//       callback(data)
//    },3000)
// }

// geoCode('india',(data)=>{
//    console.log(data);
// })

// const add = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b);
//   }, 2000);
// };

// add(5, 5, (result) => {
//   console.log(result);
// });
const doWorkCallBack = (callback) => {
  setTimeout(() => {
    callback(undefined, "i am pro full stack developer");
  }, 3000);
};

doWorkCallBack((error, response) => {
  if (error) {
    console.log(error);
  }
  console.log(response);
});
