import {app} from "./app.js";
import connectDB from "./db/index.js";
import dotenv from 'dotenv'

// .env configuration also add in start or dev in package.json file to catch envs nodemon -r dotenv/config --experimental-json-modules src/index.js
dotenv.config({
    path:'./env'
})



//PORT
const PORT = process.env.PORT || 6000

// DB initilization and listening
connectDB().then(()=>{
    app.listen(PORT , () =>{
    console.log(`Database is connected to PORT : ${PORT} `)
    })
}).catch((error)=>{
    console.log("MongoDB connection failed ", error)
});