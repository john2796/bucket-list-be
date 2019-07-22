const express = require('express');
const authRoute = require('./routes/authroutes');
const usersRoute = require('./routes/usersroutes');
const bucketRoute = require('./routes/bucketroutes');
const contactsRoute = require('./routes/contactRoutes');
const helmet = require('helmet');
const cors = require('cors');
const { isLoggedIn } = require('./middleware/authmiddleware');

const server = express(); 

server.use(helmet());
 
server.use(cors());

server.use(express.json());
 
server.use("/api", contactsRoute);  
server.use("/api", authRoute);  
server.use("/api", isLoggedIn, usersRoute);  
server.use("/api", isLoggedIn, bucketRoute);  


server.get('/', (req, res) => {
  
    res.status(200).json({message: "Bucket List API"});

});

module.exports = server;