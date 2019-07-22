const jwt = require('../auth/jwttoken');
const userDb = require("../models/authmodel");
const bcrypt = require('bcryptjs');

// Is user info valid middleware
function validateUser(req, res, next) {
    const user = req.body;

    if (!user.email || !user.password){
        res.status(400).json({ message: "Login info missing" });
    }
   
    userDb.loginUser(user.email).then(response => {
        if (!response)
            res.status(404).json({ message: "Invalid User" });
        else{
            if (bcrypt.compareSync(user.password, response.password)){
                req.cred =  {id: response.id, email: response.email, password: response.password};
                user.password = bcrypt.hashSync(user.password, 8);
                req.token = jwt.getToken(req.cred);
                next();
            }
            else{
                res.status(401).json({ message: `Login failed` });
            }
        }
    })
};

// Is user logged in middleware
 async function isLoggedIn(req, res, next){
    const verify =  jwt.verify(req.headers.authorization);
    if (verify.status === 0){
        req.user = {token: req.headers.authorization, email: verify.results.email, id: verify.results.id};
        next();
    }
    else
        res.status(401).json({error: 'Please Login'});

}

module.exports = { validateUser, isLoggedIn };