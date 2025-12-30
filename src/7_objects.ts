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

