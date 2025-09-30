import axios from 'axios';
import { CheckoutHeader } from './CheckoutHeader';
import './CheckoutPage.css'
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';


export function CheckoutPage({ cart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then((response) => {
                setDeliveryOptions(response.data);
            })
    }, [])


    return (
        <>
            <title>Checkout</title>
            <CheckoutHeader />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <div className="order-summary">
                        {
                            cart.map((cartItem) => {
                                return (
                                    <div key={cartItem.productId} className="cart-item-container">
                                        <div className="delivery-date">
                                            Delivery date: Tuesday, June 21
                                        </div>

                                        <div className="cart-item-details-grid">
                                            <img className="product-image"
                                                src={cartItem.product.image} />

                                            <div className="cart-item-details">
                                                <div className="product-name">
                                                    {cartItem.product.name}
                                                </div>
                                                <div className="product-price">
                                                    ${(cartItem.product.priceCents / 100).toFixed(2)}
                                                </div>
                                                <div className="product-quantity">
                                                    <span>
                                                        Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                                                    </span>
                                                    <span className="update-quantity-link link-primary">
                                                        Update
                                                    </span>
                                                    <span className="delete-quantity-link link-primary">
                                                        Delete
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="delivery-options">
                                                <div className="delivery-options-title">
                                                    Choose a delivery option:
                                                </div>
                                                {deliveryOptions.map((deliveryOption) => {
                                                    let priceString = "FREE Shipping";

                                                    if(deliveryOption.priceCents > 0) {
                                                        priceString = `$${(deliveryOption.priceCents / 100).toFixed(2)}`;
                                                    }
                                                    return (
                                                        <div key={deliveryOption.id}className="delivery-option">
                                                            <input type="radio" 
                                                            checked={deliveryOption.id=== cartItem.deliveryOption}
                                                                className="delivery-option-input"
                                                                name={`delivery-option-${cartItem.productId}`} />
                                                            <div>
                                                                <div className="delivery-option-date">
                                                                    {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                                                                    
                                                                </div>
                                                                <div className="delivery-option-price">
                                                                    {priceString}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    );
                                                })
                                                }


                                               
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }



                    </div>

                    <div className="payment-summary">
                        <div className="payment-summary-title">
                            Payment Summary
                        </div>

                        <div className="payment-summary-row">
                            <div>Items (3):</div>
                            <div className="payment-summary-money">$42.75</div>
                        </div>

                        <div className="payment-summary-row">
                            <div>Shipping &amp; handling:</div>
                            <div className="payment-summary-money">$4.99</div>
                        </div>

                        <div className="payment-summary-row subtotal-row">
                            <div>Total before tax:</div>
                            <div className="payment-summary-money">$47.74</div>
                        </div>

                        <div className="payment-summary-row">
                            <div>Estimated tax (10%):</div>
                            <div className="payment-summary-money">$4.77</div>
                        </div>

                        <div className="payment-summary-row total-row">
                            <div>Order total:</div>
                            <div className="payment-summary-money">$52.51</div>
                        </div>

                        <button className="place-order-button button-primary">
                            Place your order
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}