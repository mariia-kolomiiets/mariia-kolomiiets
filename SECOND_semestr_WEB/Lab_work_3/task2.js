

function getDeliveryTime(k){
    var dd = new Date();
    return Math.round((dd.getHours() * k)*60);
}


function SortMap(mainMap, addMapToSort){
    let arrMap = new Array();
    for (var [mk, mv] of mainMap.entries()) {
        for (const [ak, av] of addMapToSort.entries()) {
            if(mv === av){
                arrMap.push([mk,mv,ak]);
            }
        }
    }
    arrMap.sort(function (a, b) {
        if (a[2] > b[2]) {
          return 1;
        }
        if (a[2] < b[2]) {
          return -1;
        }
        // a = b
        return 0;
      });
      return arrMap;
}


function getMinObj(SomeArr){
    let minObj = new Object();
    for (let index = 0; index < SomeArr.length; index++) {
        if(SomeArr[index][2] === SomeArr[0][2]){ //если есть айтемы с одинаково высокой ценой
            minObj[SomeArr[index][1]+"_"+index] = SomeArr[index][0] + " " + SomeArr[index][2];
        }
    }
    return minObj 
}

function getMaxObj(SomeArr){
    let maxObj = new Object();
    for (let index = SomeArr.length-1; index > -1 ; index--) {
        if(SomeArr[index][2] === SomeArr[SomeArr.length-1][2]){ //если есть айтемы с одинаково высокой ценой
            maxObj[SomeArr[index][1]+"_"+index] = SomeArr[index][0] + " " + SomeArr[index][2];
        }
    }
    return maxObj 
}
  

const producer = new Map();
producer.set("roshen","chockolate");
producer.set("lukas","candy");
producer.set("sweet_svit","candy");
producer.set("atlas","cake");
producer.set("abk","chockolate");
producer.set("mozart","waffles");
producer.set("ferero","candybar");

const prices = new Map([[10,"chockolate"],[5,"candy"],[80,"cake"],[35,"waffles"],[15,"candybar"]]);
const delivery = new Map([[getDeliveryTime(0.8),"chockolate"],[getDeliveryTime(0.9),"candy"],[getDeliveryTime(0.3),"cake"],[getDeliveryTime(0.6),"waffles"]]);


var a1 = getMaxObj(SortMap(producer, prices))
var a2 = getMinObj(SortMap(producer, prices))

var a3 = getMaxObj(SortMap(producer, delivery))
var a4 = getMinObj(SortMap(producer, delivery))


console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);


//-------------------------------------------------------------------------------------------------------------------------------\\
//-------------------------------------------------------------------------------------------------------------------------------\\
//-------------------------------------------------------------------------------------------------------------------------------\\
//-------------------------------------------------------------------------------------------------------------------------------\\
