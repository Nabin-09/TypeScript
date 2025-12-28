let subs = 10 //what if I want it to be 1M later ?
let sub: number | string = '1M' // this is called union

let apiRequestStatus: 'pending' | 'success' | 'error' = 'error' //this is custom annotation

// apiRequestStatus = 'done' this isnt possible

let airlineSeat : 'aisle' | 'window' | 'middle' = 'middle' //very useful custom annotation

const orders = ['12' ,  '20' , '28' , '42']
let currentOrder; // this shows type any currentOrder : String (production ready way)
for(let order of orders){   
    if(order === '28'){
        currentOrder = order
        break
    }
}

console.log(currentOrder)