function getName(kind : string | number){
    if(typeof kind === 'string'){
        return `Your name is ${kind}`
    }
    return `Name order : ${kind}`
}

//This is type narrowing we can customise methods on narrowing types

function serveChai(msg?: String){ //optional
    if(msg){
        return `Yes , Your Honor ${msg}`
    }
    return `No name was sent ${msg}`
}

// console.log(serveChai()); No name was sent undefined
// console.log(serveChai('Nabin')); Yes , Your Honor Nabin (this is use of typeNarrowing)

class Naam {
    serve(){
        return `Ye tera naam hai`;
    }
}

class Name {
    serve(){
        return `This is your name`
    }
}

function serve(word : Name | Naam){
    if(word instanceof Name){
        return word.serve();
    }
}

//above we saw an interesting use case of instanceof and annotations


//Custom types

type NabinOrder = {
    type : String
    sugar : Number
}

function isNabinOrder(obj : any) : obj is NabinOrder{
    return (
        typeof obj == 'object' &&
        obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    )
}

function serving(item : NabinOrder | string){
    if(isNabinOrder(item)){
        return `You ordered ${item.type} with sugar : ${item.sugar}`
    }
    return `Your custom instruction : ${item}`
}

// we create custom datatypes using keyword : type

//interesting use case : 
type bike  = {type : 'two-wheeler' ; maxi : number};
type car = {type : 'four-wheeler' ; torque : number};
type truck = {type : '12-wheeler' ; torque : number};

type vehicle = bike | car |truck //vehicle can either be bike car or truck

