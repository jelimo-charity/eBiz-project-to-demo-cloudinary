import  express  from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import cloudinary from "./cloudinary.js";

dotenv.config()

const app = express()

app.use(cors());
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended: true, limit: '50mb'}))

const port = process.env.PORT;

app.get("/", (req, res)=>{
    res.send("Welcome to eBiz!")
});

app.post("/", (req,res)=>{

});
app.listen(port || 3000, ()=>{
    console.log(`Server running at port ${port}`);
})