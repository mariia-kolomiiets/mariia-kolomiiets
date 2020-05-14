var express = require('express');
var app = express();

const jsonParser = express.json();

const PORT = 8080;

app.use(express.static("./"));

app.post("/user", jsonParser, function(request, response) {

    if (!request.body) return response.sendStatus(400);

    let user = request.body;

    console.log(user)
    if (request.headers["user-agent"] == "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36") {
        console.log(user.age)

        if (user.btn == 'більше' && user.age >= 18) {
            response.send("Перевірка пройдена...");

        } else if (user.btn == 'менше' && user.age < 18) {
            response.send("Перевірка пройдена...");

        } else {
            response.send("Перевірка не пройдена...")
        }

    } else {
        response.send("Тільки Chrome...")
    }


});

app.listen(PORT, function() {
    console.log("Server raning on " + PORT);
})