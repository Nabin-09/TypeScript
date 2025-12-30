// const car = {
//     name : 'Mahindra Thar',
//     price : 14,
//     is4wd : true
// }
//this might not infer types sometime (need to give manually)

let car : {
    name : string,
    price : number,
    is4wd : boolean
}
// this is creation of signature of a variable and not a 'type'

car = {
    name : 'Mahindra Thar',
    price : 12,
    is4wd : true
}

type Car = {
    name : string,
    price : number,
    is4wd :  boolean
}

const wagonR : Car = {
    name : 'Wagon R',
    price : 7,
    is4wd : false
}

// important observation
type cup = {size : string};

let bigCup : cup = {
    size : 'large',
}

let smallCup = {
    size : 'small',
    beans : 'arabica'
}

bigCup = smallCup //this actually works , as smallcup satisfies the minimum condition of type cup