import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [devices,setDevice] =useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setDevice(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='shoping-cart'>
                {
                  devices.map(product =><Product 
                  product = {product}
                  ></Product>)
                }
            </div>
        </div>
    );
};

export default Shop;