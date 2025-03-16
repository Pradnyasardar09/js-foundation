
//1. Declare an array named `teaFlavours` that contains the String `"green tea"`
//, `"black tea"`, and `"oolong tea"`.
//Access the first element of the array and store it in a variable named `firsttea`


//let teaFlavours =["green tea", "black tea","oolong tea"]


//const firstTea = teaFlavours[0]


//* 
//2.Declare an array named `cities` containing `"London"` , `"Tokyo"` , `"paris"`
 //`"new york"`. 
//Access the third element in the array and store it in a vriable named `favoriteCity`.

//let cities =["London", "Tokyo", 'paris', 'new york']

//const favoriteCity = cities[2]


//*
//3. you have an array named `teaTypes` containing `"harbal tea"` ,`"white tea"`.
//and `"Masalachai"` Change the Second element of the array to `"jasmine tea"`

//let teaTypes =["harbal tea", "white tea", "masala chai"]


//4.Declare an array named `citiesVisited` containing `"mumbai"` and `"sydeny"`.
//And `"barlin"` to the array using the `push` method.


//let citiesVisited = ["mumbai", "sydeny"];
//citiesVisited [citiesVisited.length] ="barlin";
//console.log(citiesVisited.length);

//5.you have an array named `teaOrders` `"chai"` ,`"ice tea"`, `"Match"`, and `"earl grey"`
//Remove last element of the array using the `pop` method  and store it in a variable named `lastOrder`


//let teaOrders =["chai", "ice tea", "earl grey", "matcha"];
// const lastOrder =   teaOrders.pop();
//console.log(teaOrders);

// 6.you have an array named `popularTeas` containing  `"green tea"` , `"oolong tea"`
//. and `"chai"` . Create a soft copy of this array named `softcopyTeas`.

let popularTeas =["green tea", "oolong tea", "chai"];
let softcopyTeas= popularTeas;
 //console.log(softcopyTeas);

 //7.you have an Array named `topCities` containing `"barlin"` , `"Singapore"`
 //, and `"new York"`. 
 //Create a hard copy of this array named `hardcopyCities`.

 let topCities= ["barlin", "Singapore", "new York", ];
 let hardcopyCities =[...topCities];
//console.log(hardcopyCities);

//8.you have  two array: `europeancities` containing `"paris"`and `"rome"` and 
//`asianCities` contaiing `"tokyo"` and `"bangkok"`.
//merge these two array into  a new  array named `worldCities`.

let europeancities= ["paris", "rome"]
let asianCities= ["tokyo", "bangkok"]
let worldCities = europeancities+ asianCities;
console.log(worldCities);

