var getObjectName = function(){return this.name};
var getAllPropperties = function(){
        for (key in this){
            if (typeof(this[key]) !== "function"){
                console.log(this[key]);
            }
        }
    } 

var city1 = {};
city1.name = "First city";              //способ присвоения через точку
city1["population"] = 10000000;         //способ присвоения через квадратные

var city2 = {"name":"Second city", "population" : Math.pow(10,6)};

city1.getName = getObjectName;          //способ присвоения через точку
city2.getName = getObjectName;

console.log(city1.getName());
console.log(city2.getName());

city1.exportStr = getAllPropperties;
city2.exportStr = getAllPropperties;

city1.exportStr();
city2.exportStr();

//-------------------------------------------------------------------------------------------------------------------------------\\
//-------------------------------------------------------------------------------------------------------------------------------\\
//-------------------------------------------------------------------------------------------------------------------------------\\
//-------------------------------------------------------------------------------------------------------------------------------\\
