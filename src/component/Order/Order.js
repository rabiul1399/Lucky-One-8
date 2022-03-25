import React from 'react';
import './Order.css'
const Order = (Props) => {
//   console.log(Props.order.length)
    return (
        <div>
            <div className='order'>
                <h2>Selected Products</h2>
                <h3>Ordered deviced {Props.order.length} </h3>

            </div>
            
        </div>
    );
};

export default Order;