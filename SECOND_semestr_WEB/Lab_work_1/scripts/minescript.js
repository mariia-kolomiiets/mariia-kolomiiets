console.log("This is \"String\" task!");
var str = "jllk78 76 g78 7s   s";

function getNumberOfLetters(from, str){
    var counter = 0;
    from = from.toUpperCase();
    for (let iletter = 0; iletter < from.length; iletter++) {
        if (65 <= from.charCodeAt(iletter) && from.charCodeAt(iletter) <= 91){
            //console.log(typeof(from.charCodeAt(iletter)));
            //console.log(typeof(65));
            counter += 1;
        }
        
    }
    console.log(`\nYour string is \"${str}\".\nThere is ${counter} letters in your string.`);
}

getNumberOfLetters(str, str);

//////////////////////////////////////////////////////////////

console.log("\n\n\nThis is \"Function\" task!\n");


function myDeclaration(name,surname,lastname,town,age=21,allowed = false){
    name = name.toUpperCase();
    surname = `${surname}-el Muerto de la ${lastname}`;
    town = town + " city";
    allowed = (age <= 21 ? false : true);
    if (allowed){
        return `Welcome: ${name}!!!\n--------Profile--------\nSurname: ${surname}\nLastname: ${lastname}\nFrom: ${town}!\n------------End profile -----------`;
    }
    else{
        return "А, а, а-а, you are not allowed to sign-in!"
    }  
}

var printCheck = function(discount = 0,items = [],date=new Date()){
    let predict = "\n\nPrediction:\n------What a LUCK------\nYou will not die today!\n------Congratulations------";

    if (arguments.length > 3){
        predict = `\n\nPrediction:\n------What a LUCK------\n${arguments[3]}\n------Congratulations------`;
    }
    let check = `--------Hello in HoleMarket--------\nToday is ${Date.parse(date) === NaN ? "nice day" : getformatDate(date)}\nYour purchases are:`;
    let total = 0;
    let price = 0;
    items.forEach(item => {
        switch (item){
            case "salat":
                price = 3.00;
                check += `\nSalat:____${price.toFixed(2)+ "$"}`;
                total += price;
                break;
            case "tomato":
                price = 2.50;
                check += `\nTomato:____${price.toFixed(2)+ "$"}`;
                total += price;
                break;
            case "sausage":
                price = 16.00;
                check += `\nSausage:____${price.toFixed(2)+ "$"}`;
                total += price;
                break;
            case "bread":
                price = 8.90;
                check += `\nBread:____${price.toFixed(2)+ "$"}`;
                total += price;
                break;
            case "onion":
                price = 1.33;
                check += `\nOnion:____${price.toFixed(2)+ "$"}`;
                total += price;
                break;
            case "cucumber":
                price = 4.60;
                check += `\nCucumber:____${price.toFixed(2)+ "$"}`;
                total += price;
                break;
            case "iphoneX":
                price = 200.00
                check += `\nIphoneX:____${price.toFixed(2)+ "$"}`;
                total += price;
                break;
            case "sweets":
                price = 49.99;
                check += `\nSweets:____${price.toFixed(2)+ "$"}`;
                total += price;
                break;
            default:
                check += `\n${item}:____${null}`;
                break;
        } 
    });
    total = discount != 0 ? total - (total*(discount/100)) : total;
    check += "\nTotal is: "+ total.toFixed(2)+ "$" + ` with ${discount == 0 ?'NO': discount+"%"}`+ " discount." + predict;
    console.log(check);  

}
var DecReturn = myDeclaration("Petya","Habibulin","Petrovich","Saransk",30);
console.log(DecReturn);
printCheck(5,["salat","sweets"],new Date(2014,5,12))


/////////////////////////////////////////////////////////

console.log("\n\n\nThis is \"Array\" task!\n");

var myArr = new Array('Alan', 900,"Lemon"+"-"+'Juice',4567.00009, new Date(2020,1,20,30,25,11))
for (let ind = 0; ind < myArr.length; ind++) {
    console.log(myArr[ind]);
    
}













///////////////////
function getformatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let sec = date.getSeconds();

    return `${day}.${month}.${year}, ${hour}:${minutes}:${sec}`;
}