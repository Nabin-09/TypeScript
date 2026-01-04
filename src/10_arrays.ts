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
const table : number[][] = [
    [3 , 4 ,5 , 6, 7],
    [8 , 9, 10, 11 , 12]
] //creating 2D array


let userInfo : [number , string , boolean] //stictly follow this order

userInfo_data : userInfo = [23 , 'Nabin' , true] //now we can cannot alter [23 , true , 'Nabin']





