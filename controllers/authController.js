const _ = require('lodash');
const mongoose = require('mongoose');
const config = process.env;


// Models
const {Token, BlacklistedTokens} = require('../m')




const signup = asyncWrapper(async(req, res, next) =>{
    if(!req.body.role){
        throw new badRequestError(
            'Missing required parameter: validation failed'
        )
    }
    const data = ({firstname, lastname, email, role, password, phonenumber} = req.body);
   const restricted_roles  = ["SuperAdmin"]
   if(restricted_roles.includes(role)) {throw new UnauthorizedError("SuperAdmin Acccount can not be created using this endpoint")}
   if(!validateEmail(email)){
    throw new BadRequestError('Email validation falied');

   }
})

// Middlewares
const asyncWrapper = require("../middlewares/asyncWrapper"),
{
    CustomAPIError,
    badRequestError,
    UnauthorizedError,
} = require("../middlewares/customError")

// Helpers 
const client  = mongoose.connection
const validateEmail  = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}
