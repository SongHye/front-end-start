var fs = require('fs');

fs.writeFile('message.txt', 'Hello World', function(err) {
   if(err) throw err;
   console.log('It\'s saved');
   }
              
)