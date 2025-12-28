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
// value.toUpperCase()//throws no error

let newValue : unknown
newValue = 'nabin'
newValue = 2.5
// newValue.toUpperCase() 'newValue' is of type 'unknown' (this error is thrown)
if(newValue === 'string') newValue.toUpperCase() // this is how we do it if used unknown


try{

}catch(error){
    if(error instanceof Error){
        console.log(`Error : ${error.message}`);
    }
    console.log('Error' , error);
}

//This is how we generally use try catch block , we ensure type of Error to be from Error class as well

const data : unknown = 'Nabin is just goated'
// const StrData : string = data //Type 'unknown' is not assignable to type 'string - although code runs its not recommended
const StrData : string = data as string //recommended way
console.log(StrData);


type Role = 'admin' | 'user';
function redirectRoleBased(role : Role): void{ //doesnt matter whats returned or nothing is returned for void
    if(role === 'admin'){
        console.log(`Redirecting to admin`);
    return
    }
    else if(role === 'user'){
        console.log(`Redirecting to user dashboard`);
        return
    }
    role;  //gives role : never (but if we had third type as well it would default be that type)
       
}