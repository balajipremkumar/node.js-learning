// object property shorthand
const name = "bala";
const userAge = 29;

const user = {
  name,
  age: userAge,
  location: "chennai",
};

console.log(user);

// object destructuring

const product = {
  rate: 100,
  name: "car",
  varient: "highend",
  model: "suv",
  rating: 4.5,
};

// const { model: topModel, varient, rating = 5 } = product;

// console.log(topModel, varient);
// console.log(rating);

const transaction = (type, { varient = "midrange", model = "suv" } = {}) => {
  console.log(type, varient, model);
};

transaction("order", product);

// transaction("order");
