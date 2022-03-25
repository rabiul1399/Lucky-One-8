import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [devices,setDevice] =useState([]);
    // const [order, setOrder] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setDevice(data))
    },[])

    // useEffect(() =>{
    // //   const storOrder = getStore();
    // const saveCart =[];
    // for(const id in )
    // },[devices])

    const deviceAddToCart = (selectedProduct) =>{
        console.log(selectedProduct)

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
                <Order order={devices}></Order>
            </div>
        </div>
    );
};

export default Shop;