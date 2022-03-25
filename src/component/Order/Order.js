import React from 'react';
import './Order.css'
const Order = (Props) => {
    const {order} = Props;
   let total = 0;
   for(const product of order){
       console.log(product)
       total = total + product.price;
   }
    return (
        <div>
            <div className='order'>
                <h2>Selected Products</h2>
                <h3>Ordered deviced {order.length} </h3>
                <p>Price: {total}</p>

            </div>
            
        </div>
    );
};

export default Order;