let response: any = '56'

// let numLength : number = response.length this does not work we need to do forceful type assertion

let numLength: number = (response as string).length //this works absolutely fine
type Book = {
    name : String
}

let BookString = '{"name" : "Intro to Automaton"}';
let BookObject = JSON.parse(BookString) as Book //this is type assertion and not conversion

console.log(BookObject)

//main difference between any and unknown is that everything works in any but we need to use 
// typecheck in case of unknown , when call , construct or access properties.

let value : any
value = 'nabin'
value = 2.5
value = 67
value.toUpperCase() //throws no error

let newValue : unknown
newValue = 'nabin'
newValue = 2.5
// newValue.toUpperCase() 'newValue' is of type 'unknown' (this error is thrown)
if(newValue === 'string') newValue.toUpperCase() // this is how we do it if used unknown
