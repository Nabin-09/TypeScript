let drink = 'mojito'
// drink = 0  not assignable


let cups = Math.random() > 0.5 ? 10 : '5' //cups can either be number or string  -> this is called type inferencing

let flavour : String  = "chocolate" //this is called type annotation
flavour = "Pista" //this is allowed
// flavour = true this is not allowed