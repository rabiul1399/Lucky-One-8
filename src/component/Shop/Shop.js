import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [devices,setDevice] =useState([]);
    const [order, setOrder] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setDevice(data))
    },[])


    const deviceAddToCart = (selectedProduct) =>{
        // console.log(selectedProduct)

        const newOrder = [...order,selectedProduct]
        setOrder(newOrder)
        // const newOrder = [];

        // const stands = order.find(product =>product.id ===);
        // if(!stands){
        //     selectedProduct.quentity=1;
            // newOrder = [...order,selectedProduct]
        // }
        // else{
        //     const rest = order.filter(product => product.id !==  selectedProduct.id) ;
        //     stands.quentity = stands.quentity +1;
        //     newOrder = [...rest , stands]
        }

    
    // }


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