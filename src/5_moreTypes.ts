let response: any = '56'

// let numLength : number = response.length this does not work we need to do forceful type assertion

let numLength: number = (response as string).length //this works absolutely fine
type Book = {
    name : String
}

let BookString = '{"name" : "Intro to Automaton"}';
let BookObject = JSON.parse(BookString) as Book //this is type assertion and not conversion

console.log(BookObject)