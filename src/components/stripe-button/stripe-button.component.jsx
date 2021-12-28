import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutbutton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51KBYkCKU5yVQuMdVRkDyWukLeInzQANfaOBn7riR8Vk0UXDjyrOY7ygchfBa9dlsfHqy177NuLmmRDi6WSXZDS2600A4x30qpW';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Ecommerce-Platform"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      // token- on successcall back, when we submit, token will fire
      token={onToken}
      stripeKey={publishableKey}
   />
  );
};

export default StripeCheckoutbutton;