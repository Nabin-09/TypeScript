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
interface carSize{
    size : 'Small' | 'large'
}

type BaseCar = {
    bhp : number
}
type Extra = {
    sunroof : boolean
}

//example of intersection of types

type car = Extra & BaseCar

const thar : car = {
    bhp : 140,
    sunroof : true
}

//this is how we use intersection 

//optional data 

type User = {
    username : string,
    bio?: string //optional variable
}

const u1 : User = {username : 'nabin09'};
const u2 : User = {username : 'nitin09' , bio : 'I am a software dev in India'} //both are valid