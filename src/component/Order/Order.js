import React from 'react';
import './Order.css'
const Order = (Props) => {
    const {order} = Props


    const handleClick=() =>{
        const maxNumber = order.length;
const randomNumber = Math. floor((Math. random() * maxNumber) + 0);
    
    }
    return (
        <div className='orderList'>
            <div className='order'>
                <h2>Selected Products</h2>
                <h3>Ordered deviced {order.length} </h3>
                {
                    order.map(cart =><h4>{cart.name}</h4>)
                }

            </div>

            <button onClick={handleClick}>CHOOSE FOR 1 ME</button>
            <br />
            <button>REMOVE ADD BUTTON</button>
            
        </div>
    );
};

export default Order;