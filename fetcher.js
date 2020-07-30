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
