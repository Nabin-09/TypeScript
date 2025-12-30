//PARTIAL keyword makes all the values to be passed optional 

type Car = {
    name : string,
    bhp : number ,
    is4wd : boolean
}

const updateCar = (updates : Partial<Car>)=>{
    console.log('Updating car with' , updates);
}

updateCar({bhp : 120})


//Similarly we have required that makes all the methods required

const OrderCar = (needed : Required<Car>)=>{
    console.log(`Ordered a car`);
}

OrderCar({name : 'WagonR' , bhp : 100 , is4wd : false})


//Discuss about Omit and Pick

type BasicCarInfo = Pick<Car, 'name'|'bhp'> //precisely pick which elements are needed

