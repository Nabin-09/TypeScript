//Defining types in function

function makeCar(type : string , seats : number){
    console.log(`type of car : ${type} and it has ${seats} seats`);
}

makeCar('SUV' , 7); //type of car : SUV and it has 7 seats

function getSeats(seats : number): number{ //return type of function
    return seats
}

function hey() : void{ //this is return type of function
    console.log(`Hey there`);
}

//optional arguments

function calculateEMI(principal?: number , interest?: number , time?: number):string{
    return `Calculate interest`
}