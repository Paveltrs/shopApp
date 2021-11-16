import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JwVYrKoexiMVytMnu5NeTa9HBij9KEZaOPxIeMiuMV4PBn7L2ILLLvwXAlEyM3R18cVjBOKHvAYsAJycHJl6cuv00yEjtRcgu'
    const onToken = () => {
    alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='shopClothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            />
    )
}

export default StripeCheckoutButton;