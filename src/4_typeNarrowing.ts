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