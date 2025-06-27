import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {CheckoutProvider, Elements} from '@stripe/react-stripe-js';
import CheckOutForm from '../../components/Dashboard/CheckOutForm';

const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_KEY}`);

const Payment = () => {
    // const {id} = useParams();
    return (
        <Elements stripe={stripePromise}>
            <CheckOutForm />
        </Elements>
    );
};

export default Payment;