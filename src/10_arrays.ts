// const carTypes : string[] = ['SUV' , 'HatchBack' , 'Sedan']
// const carPrice : Number[] = [15 , 18 , 35]

// //Alternate way

// const rating : Array<number> = [4.5, 3 , 1]



type carTypes = 'SUV' | 'hatchback' | 'sedan'


//array of objects 

type Cars = {
    name : string ,
    price : number
}

const Car_list : Cars[] = [
    {name : 'WagonR' , price : 5},
    {name : 'Magnite' , price : 12}
]

const cities : readonly string[] = ['Delhi' , 'Mumbai'] //this cant be updated