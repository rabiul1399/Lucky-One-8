import React from 'react';
import './Order.css'
const Order = (Props) => {
    const {name} = Props.selectedProduct;
    // const {randomNumber}=Props;
    // const {orderRest} =Props;

//  console.log(order.indexOf())

//     const handleClick=() =>{
//         const maxNumber = order.length;
// const randomNumber = Math. floor((Math. random() * maxNumber) + 0);
//     console.log(randomNumber)
//     const rand = order.indexOf(randomNumber)
//     // console.log(rand)

// onClick={handleClick}
//     }
    return (
        <div className=''>
            <div className='order'>
               <h4>{name}</h4>
            </div>       
        </div>
    );
};

export default Order;