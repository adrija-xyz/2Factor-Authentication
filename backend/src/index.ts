import "dotenv/config";
import cors from "cors";
import express,{Request,Response} from "express";
import cookieParser from "cookie-parser";
import { config } from "./config/app.config";
import connectDatabase from "./database/database";

const app=express();
// const BASE_PATH=config.BASE_PATH;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(
    cors({
        origin:config.APP_ORIGIN,
        credentials:true
    })
)

app.use(cookieParser());

app.get("/",(req:Request,res:Response)=>{
    res.status(200).json({
        message:"Hello there"
    })
})

app.listen(config.PORT,async()=>{
    console.log(`Server listening on port ${config.PORT} in ${config.NODE_ENV}`);
    await connectDatabase();
})

//adrijabhowmick21
//t49Jz33ZEknnWXus
//mongodb+srv://adrijabhowmick21:t49Jz33ZEknnWXus@mern-cluster.3xbr1.mongodb.net/