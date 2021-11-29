const jwt = require("jsonwebtoken")
const tokenAuth = function(req,res,next){
    // use Axios to pass token to header
    if(req.headers.authorization){
        console.log(req.headers);
        const token =req.headers.authorization.split(" ").pop();
        console.log(token)
        jwt.verify(token, process.env.JWT_SECRET,function(err,data){
            if(err){
                console.log(err)
                return res.status(403).send("invalid token")
            } else {
                console.log("success");
                req.user = data;
                next()
            }
        })
    } else {
        return res.status(403).send("include your token")
    }
}

const tokenQuery = function(req,res,next){
    // use Axios to pass token to header
    if(req.headers.authorization){
        console.log(req.headers);
        const token =req.headers.authorization.split(" ").pop();
        console.log(token)
        jwt.verify(token, process.env.JWT_SECRET,function(err,data){
            if(err){
                console.log(err)
                req.guest = true
                next()
            } else {
                console.log("success");
                req.user = data;
                console.log(data)
                req.guest = false;
                next()
            }
        })
    } else {
        req.guest = true
        next()
    }
}

module.exports = tokenAuth
module.exports = tokenQuery