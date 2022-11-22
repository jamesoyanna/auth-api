const express = require("express");
const morgan = require("morgan");
//const errorHandler = require("./middlewares/errorHandler")
//const { basicAuth } = require("./middlewares/auth/auth")
const cors = require('cors')
const app = express();


// Middlewares
if (process.env.NODE_ENV != "test"){ app.use(morgan('dev'))}
app.use(express.json())


app.use(cors())

app.get('/', (req, res) => {
    res.send("I am api route")
})

const authRoute = require('./routes/authRoutes')
    //userRoute = require('./routes/userRoutes')
    // superAdminAuthRoute = require('./routes/superAdminAuthRoutes')

// Auth 
//app.use('/api/auth', authRoute)
// app.use('/api/auth/superadmin', superAdminAuthRoute)

// Post-login
//app.use('/api/auth/user', basicAuth, userRoute)
// app.use('/api/admin', basicAuth, adminRoute)



//app.use(errorHandler)


module.exports = app;