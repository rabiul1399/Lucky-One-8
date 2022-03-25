
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'


const Product = (Props) => {
 
    const {product, deviceAddToCart} = Props;
    const {name,img,price,Brand,ratings} = product;
    return (
        <div className='products'>             
               <img src={img} alt="" />
                <div className='product-info'>
                    <p className='product-name'>{name}</p>
                    <p>Price: ${price}</p>
                    <p className='product-brand'>Brand:{Brand}</p>
                    <p>Rating: {ratings}</p>
                </div>
                <button onClick={() =>deviceAddToCart(product)} className='cart-btn'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>      
        </div>
    );
};

export default Product;