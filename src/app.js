import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express();

// cross origin resource sharing 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

// Defining how much json we take 
app.use(express.json({ limit: "16kb" }))

// Encodes the url 
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

// To use satice files when we use someting
app.use(express.static("public"))

// to process cookies from server
app.use(cookieParser())


// routes import
import userRouter from './routes/user.routes.js'



// routes declertion
app.use('/api/v1/user', userRouter)
// endpoint will be => http://localhost:8000/api/vi/user


export { app };