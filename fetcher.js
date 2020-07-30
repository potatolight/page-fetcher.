const request = require('request');
 const fs = require('fs')
const web = process.argv[2]
const location = process.argv[3]
request(web, (error, response, body) => {
  fs.writeFileSync ('index.html', body)
  console.log("File written successfully\n"); 
  console.log("The written has the following contents:"); 
  console.log(fs.readFileSync("index.html", "utf8")); 
  console.log('Downloaded and saved '+ body.length + ' bytes to '+ location )  
 });




// const writeIn ()

// // asyncBreeds.js
// const breedDetailsFromFile = function (name, functionToRunWhenThingsAreDone) {
//   // console.log('breedDetailsFromFile: Calling readFile...');
//   fs.writeFileSync(`./${name}.html`, 'utf8', (error, data) => {
//     // CHANGE: Pass data into callback instead of returning it directly
//     // console.log("In readFile's Callback: it has the data.");
//     if(error){
//       functionToRunWhenThingsAreDone(undefined);
//     }
//     functionToRunWhenThingsAreDone(data);
//   });
// };
// // CHANGE 1: Moved the console.log into a new function:
// const printOutCatBreed = (breed)=> {
//   console.log('Return Value: ', breed) // => print out details correctly.
// };
// // CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
// breedDetailsFromFile('Bombay', printOutCatBreed);
// // module.exports = breedDetailsFromFile;
