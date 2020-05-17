var express = require('express');
var body_parser = require("body-parser");
var app = express();
const PORT = 8080;
app.listen(PORT, function() {
    console.log("Server is listening port number " + PORT);
})
app.use(express.static("./"));
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));



app.post("/check", function(request, response) {

    if (!request.body) return response.sendStatus(400);
    // console.log(math_input);
    let math_input = request.body;
    console.log(math_input);
    if ((request.headers["user-agent"] == "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 OPR/68.0.3618.104")||(request.headers["user-agent"] == "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36")) {

        var first = math_input.first==12 ? "Right!" : "Not correct";
        var second = math_input.second=="(1;2)" ? "Right!" : "Not correct";
        var third = math_input.third=="0" ? "Right!" : "Not correct";
        var fourth = math_input.fourth==0.5 ? "Right!" : "Not correct";
        var fifth = math_input.fifth==5 ? "Right!" : "Not correct";

        if (math_input.choice == 'Accept') {
            
            let math_json = [ { first: first, second: second, third: third, fourth: fourth, fifth: fifth } ];
            response.send(math_json);

        } else if (math_input.choice == 'Get answers') {

            let math_json = [{ first: 12, second: "(1;2)", third: 0, fourth: 0.5, fifth: 5 }];
            response.send(math_json);

        } else {
            
            response.send([{ first: null, second: null, third: null, fourth: null, fifth: null }]);
        }

    } else {
        console.log(request.headers["user-agent"] );
        console.log("client is not suitable")
        response.send("No suitable browser! Sorry =)")
    }
});

