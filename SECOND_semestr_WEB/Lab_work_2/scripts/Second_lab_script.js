const express = require("express");
const bodyParser = require("body-parser");
  
const app = express();

 const urlencodedParser = bodyParser.urlencoded({extended: false});
 
app.get("/register", urlencodedParser, function (request, response) {
    response.sendFile("D:/DonetskNatUniversity/Web tech/SECOND_semestr_WEB/Lab_work_2/index.html");
});

app.post("/register", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    console.log("-------------------------------------------------------------");
    
    // console.log(request);
    // console.log(response);
    response.send(`<h1 style=\"color:${request.body.userColoring}; font-size:${request.body.userNumber}%\">${request.body.userTitle} >>>>>> ${request.body.userNumber}!</h1>`);
});

app.get("/mood", function (request, response) {
    response.sendFile("D:/DonetskNatUniversity/Web tech/SECOND_semestr_WEB/Lab_work_2/index2.html");
    // let doc = window.document;
    // let elTitle = doc.getElementById('title');
    // elTitle.setAttribute('type','number');
    //response.send(mood);
    });

app.post("/mood", urlencodedParser, function (request, response) {
        if(!request.body) return response.sendStatus(400);
        
        let col = request.body.coloring;    
        let q = request.body.userTitle;
        let tbm = 'isch';
        let tbs =  `ic:specific,isc:${col}`;
        let hl =  'ru';
        let oq = request.body.userTitle;

        console.log(`coloring: ${request.body.coloring}`);
        console.log(`userTitle: ${request.body.userTitle}`);
        response.redirect(`https://www.google.com.ua/search?q=${q}&tbm=${tbm}&tbs=${tbs}&hl=${hl}`);
    });



     
app.get("/", function(request, response){
    response.send("Это главная страница/ This is main page.");
});
  
app.listen(3000);