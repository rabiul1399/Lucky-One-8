import React from 'react';
import './Order.css'
const Order = (Props) => {
    const {name} = Props.selectedProduct;
    return (
        <div className=''>
            <div className='order'>
               <h4>{name}</h4>
            </div>       
        </div>
    );
};

export default Order;