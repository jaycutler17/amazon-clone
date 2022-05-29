import React from 'react'
import '../checkoutproduct.css';
import { useStatevalue } from '../context/StateProvider';

function CheckoutProduct(props) {
    const [{ basket }, dispatch] = useStatevalue();

    const removeFromTheBasket = () => {
        dispatch({
            type: 'remove_from_basket',
            id: props.id
        })
    }
    return (
        <div className='checkoutproduct'>
            <img className='productimage' src={props.image} />
            <div className='product-info'>
                <p className='product-title'> {props.title}</p>
                <p className='product-price'>
                    <small>$</small>
                    <strong> {props.price}</strong>
                </p>
                <div className='product-rating'>
                    {Array(props.rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromTheBasket} className='product-button'>remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct