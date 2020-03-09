const botgram = require("botgram")
const expr = require("express")
const fs = require("fs")
const bot = botgram("888194592:AAGFdPiv3e1yoWdV2MQFqy-_pTuB5IvdcYk")

bot.command("start", "help", (msg, reply) =>
  reply.text(`Hi ${msg.chat.firstname}(${msg.chat.username})\nType command 'adv' to get your meal advice for today!`))

bot.command("adv", (msg, reply, next) => {
  let date = new Date();
  let day = date.getDay();
  if(day === 6){
    var photo = "pizza.jpg";
    var photoPath = "picture/"+photo;}
  else if(day === 5){      
    var photo = "salat.jpg";
    var photoPath = "picture/"+photo;}
  else if(day === 4){      
    var photo = "burger.jpg";
    var photoPath = "picture/"+photo;}
  else if(day === 3){      
    var photo = "fish.jpg";
    var photoPath = "picture/"+photo;}
  else if(day === 2){      
    var photo = "meat.jpg";
    var photoPath = "picture/"+photo;}
  else if(day === 1){      
    var photo = "lasagna.jpg";
    var photoPath = "picture/"+photo;}

  var buffer = fs.readFileSync(photoPath);
  buffer.options = photo;
  reply.text("Here's your meal advise:");
  reply.photo(buffer);
  console.log(reply);
  console.log(msg);
})

bot.command((msg, reply) => 
  reply.text("... i dont uderstand"));
