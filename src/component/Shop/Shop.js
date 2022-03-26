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
        console.log(selectedProduct)
       
            const newOrder = [...order,selectedProduct]
            setOrder(newOrder)
    
    }

    const randomNumber=() =>{
        const random =[Math.round(Math.random()*order.length)]
            if(!order.length){
                alert("please select the product")
               }
               else{
                alert("This Product Best For You :"+" "+order[random].name)
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
            <h2>Selected Products</h2>
               {
                   order.map(selectedProduct => <Order selectedProduct={selectedProduct}                 
                    ></Order>)
               }
                 <button className='btn-star' onClick={randomNumber} >CHOOSE FOR 1 ME</button>
            <br/> <br/>
            <button  className='btn-star' onClick={orderRest}>REMOVE ADD BUTTON</button>
            </div>
        </div>
    );
};

export default Shop;