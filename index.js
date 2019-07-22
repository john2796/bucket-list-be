const server = require('./api/server.js');

const port = process.env.PORT || 8000; 

server.listen(port, function () { 
  console.log(`Listening on ${port}`);  
});
