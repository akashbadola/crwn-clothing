import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H9Ew7JVxwTgLqp3z1s1sCysveBkAhka8C7Dxp1DNmtGdiostADvC9x2NAVPUfZx6504NbKOzQKplMpxSL6v6fbH00SejBwfwt';

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}



    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;

