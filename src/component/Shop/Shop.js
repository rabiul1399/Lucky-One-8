import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [devices,setDevice] =useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setDevice(data))
    },[])

    const [order, setOrder] = useState([]);

    const deviceAddToCart = (selectedProduct) =>{
        // console.log(selectedProduct)

        if(order.length < 4){
            const newOrder = [...order,selectedProduct]
            setOrder(newOrder)
        }
        else{
            alert('Not allowed 4 items over')
        }
        
    }
    //----------CLEAR ALL---
    const orderRest =() =>{
        const rest=[]
        setOrder(rest);
    }

    return (
        <div className='shop-container'>
            <div className='shoping-cart'>
                {
                  devices.map(product =><Product 
                  product = {product} key={product.id}
                  deviceAddToCart={deviceAddToCart}
                  ></Product>)
                }
            </div>
            <div className='order-cart'>
                <Order order={order}></Order>
            </div>
        </div>
    );
};

export default Shop;