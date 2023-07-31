const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// get nested info from html to server
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    // console.log(req);
    // res.send("Hello World")
    //  instead of sending h1 or message send file html
    res.sendFile(__dirname + "/index.html");

});

// post 
app.post("/", function(req, res){

    // console.log(req.body.num1); // using req.body accessing html 
    
    // storing num1 and num2 in var
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    // send response to user
    res.send("The result of the calculation is " + result);

    // only one response you can send for a particular route
    // res.send("Thanks for posting that");
});

// bmi
app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");

});

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);
    
    res.send("Your BMI is " + bmi);
});

// listen at that port
app.listen(3000, function(){
    console.log("server started on port 3000");
});