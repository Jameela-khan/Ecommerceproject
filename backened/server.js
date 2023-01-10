const app = require("./app");
const dotenv = require("dotenv");

const path = require('path');
const connectDatabase = require("./config/database")


//config
dotenv.config( { path : 'backened/config/config.env'} );


//connecting to database
connectDatabase();


app.listen(process.env.PORT,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})