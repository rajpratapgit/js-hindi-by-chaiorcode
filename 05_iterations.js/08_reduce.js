const myNums = [1,2,3]


// const myTotal = myNums.reduce(function (acc, curVal)  {
//     console.log(`acc: ${acc} and curval ${curVal}`);
//     return acc + curVal
// }, 0)

const myTotal = myNums.reduce((acc, curVal) => {
    // console.log(`acc: ${acc} and curval ${curVal}`);
    return acc + curVal
}, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "iPhone",
        price: 53999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 9999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0)

console.log(priceToPay);