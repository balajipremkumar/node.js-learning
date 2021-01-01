const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("im pro full stack developer");
    reject("Development under process");
  }, 3000);
});

doWorkPromise
  .then((result) => {
    console.log("success!", result);
  })
  .catch((error) => {
    console.log("Error", error);
  });
