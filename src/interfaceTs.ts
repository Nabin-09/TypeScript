// function makeOrder(order : {type : string ; sugar : number ; strong : boolean}){
//     console.log(order);
// }

// function serveOrder(order:{type: string; sugar : number; strong : boolean}){
//     console.log(order);
// }

//therefore rather than using the same signature of data lets redefine it somewhere

type itemOrder = {
    type : string ;
    sugar : number ;
    strong : boolean;
}

function makeOrder(order : itemOrder){
    console.log(order);
}

function serveOrder(order : itemOrder){
    console.log(order);
}

type carEngine = {
    cylinders : number ;
    turbo : boolean;
}

class Garage implements carEngine{ //incorrectly implements interface carEngine
    cylinders = 10;
    turbo = true;
    //although this runs but isnt good practice
}