//const express = require('express');  // node_modules 에서 express 파일을 불러오는 것을 의미(require or import 해주어야한다)
import express from "express"; // 최신버전 js 문법(위와 똑같은 내용임)
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./routers/userRouter";

const app = express();   // app 변수를 통해 express(); 함수를 실행한 것임s

const handleProfile = (req, res) => res.send("You are on my profile");
// function handleProfile(req, res){
//     res.send("You are on my profile");
// }

const handleHome = (req,res) => res.send("Hello from Hometown!!");  // arrow function - 밑에와 내용은 같은나 형식만 다름
// function handleHome(req, res){
//     res.send("Hello from Home!!");
// }

//morgan 을 쓰면서 middleware 부분은 삭제함
// const betweenHome = (req, res, next) => {
//     console.log("I'm between");   
//     next();
// };
// app.use(betweenHome);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;
