const fs = require('fs')

// const book = {
//     title:'Ego is the Enemy',
//     author:'Ryan Holiday'

// }
// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJson)

// const dataBuffer = fs.readFileSync('1-json.json')
// const jsonData =dataBuffer.toString()
// const data = JSON.parse(jsonData)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const userObject = JSON.parse(dataBuffer.toString())
userObject.name = 'balaji fullstack developer'
userObject.age = 29
const newOriginalData = JSON.stringify(userObject);
// console.log(newOriginalData);
fs.writeFileSync('1-json.json',newOriginalData) 