// require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
require('dotenv').config()

const app = require("./app");
const PORT  = process.env.PORT || 5000
const connectDatabase = require("./db/connectDB");

async function start(){
    try {
        await connectDatabase(process.env.MONGO_URI)
        app.listen(PORT, () =>{
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (error) {
       console.log(error) 
    }

}

start();