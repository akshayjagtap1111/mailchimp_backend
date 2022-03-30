const express = require("express");
const cors = require("cors");

const body_parser = require("body-parser")

const mongoose = require("mongoose");

const connect = require("./src/config/db")
const app = express();

// app.use(express.json())
app.use(body_parser.json())

// const importData = require("./data.json")


const user_controller = require("./src/controllers/user_controller")
const subscriber_controller= require("./src/controllers/subscriber_controller")
const mailcontroller =require("./src/controllers/Send_mail")


const {register, login} = require("./src/controllers/auth_controller")

let  port = process.env.PORT || 3000;
app.use(cors())



app.use("/user",user_controller);

app.use("/subscriber",subscriber_controller);

app.use("/mails",mailcontroller)

app.post("/register",register);

app.post("/login",login);

app.get("/test",(req,res)=>{
    res.send("testing the route.....success")
});

app.get("/check",(req,res)=>{
    res.send("checking the routs.........")
})

// const product = require("../models/product_model")
// app.get("/",async (req,res)=>{

//     ///main route for product...........

//     let product_data = await product.find().lean().exec();

//     res.send(product_data);
// })


app.listen(port,async ()=>{

    connect()

    console.log(`application is listening on port ${port}`)
   
});