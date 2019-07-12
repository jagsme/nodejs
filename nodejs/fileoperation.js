const fs = require('fs');  
function nodeStyleCallback(err, data) {  
 if (err) {  
   console.error('There was an error', err);  
   return;  
 }  
 console.log(data);  
}  
// fs.readFile('/home/user/Desktop/does.txt', nodeStyleCallback);  

fs.readFile('/home/user/Desktop/Kuber/abcd.txt', nodeStyleCallback);
