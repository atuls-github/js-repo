const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc,currvel){
//     console.log(`acc: ${acc} and carrval: ${currvel}` );
//     return acc + currvel
// },0)

const myTotal = myNums.reduce((acc, curr) => acc + curr,0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemsName : "Js course",
        price: 1399,
    },
    {
        itemsName : "pyhton",
        price: 1699,
    },
    {
        itemsName : "devops",
        price: 1299,
    },
    {
        itemsName : "data scienc",
        price: 1999,
    }
]
const total = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(total);
