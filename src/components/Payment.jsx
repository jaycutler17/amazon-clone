import React from 'react'
import { useStatevalue } from '../context/StateProvider';
import "../payment.css";
import CheckoutProduct from './CheckoutProduct';
function Payment() {

    const [{ basket, user }, dispatch] = useStatevalue();

    return (
        <div className='payment'>

            <div className='payment-container'>
                <h1>Checkout ({basket?.length} items)</h1>

                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3 >delivery address</h3>
                    </div>
                    <div className='payment-address'>
                        <p>{user?.email}</p>
                        <p>123 React lane lose angeles ,CA</p>
                    </div>
                </div>
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3 >Review items and delivery </h3>
                    </div>
                    <div className='payment-items'>

                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3> your payment method</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment