import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'

import { useStateValue } from './StateProvider'
function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout (
                    <Link to='/checkout'>
                        {basket?.length} items
                    </Link>
                    )
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles  , California</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {
                            basket.map(item => (
                                <CheckoutProduct key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* I dont have blaze firebase account that why not using stripe here */}
                        {/* <form onSubmit={handleSubmit}> */}
                        {/* <CardElement onChange={handleOnChange}/> */}
                        {/* </form> */}
                        {/* Clever programmer (I hsve to watch from payment) */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment