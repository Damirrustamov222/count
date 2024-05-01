let arr = [
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
]
let arrTwo = [
    [
        {
            price: 100,
            booked: false
        }
    ],
    [
        {
            price: 100,
            booked: true
        }
    ],
    [
        {
            price: 100,
            booked: false
        }
    ],
    [
        {
            price: 100,
            booked: true
        }
    ],
    [
        {
            price: 100,
            booked: false
        }
    ],
]

let total = 0
let total_rooms_price = 0
let unbooked_rooms = 0




    for (let i = 0; i < arr[0].length; i++) {
        for (let k = 0; k < arr[i].length; k++) {            
            total+=arr[i][k]
        }
    }


    for (let h = 0; h < arrTwo.length; h++) {
        for (let f = 0; f < arrTwo[h].length; f++) {
            total_rooms_price+=arrTwo[h][f].price          
        }
    }

    for (let z = 0; z < arrTwo.length; z++) {
        for (let x = 0; x < arrTwo[z].length; x++) {
            if (arrTwo[z][x].booked === false) {
                unbooked_rooms++;
            }
        }
    }
    

console.log(total);
console.log(total_rooms_price);
console.log(unbooked_rooms);