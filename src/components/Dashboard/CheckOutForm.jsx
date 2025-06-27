import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Loader from '../Loader/Loader';
import Spinner from '../Loader/Spinner';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const CheckOutForm = () => {
    const { id } = useParams();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { user } = useAuth();

    const { data: parcelInfo = {}, isPending } = useQuery({
        queryKey: ['parcel', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${id}`)
            return res.data;

        }
    })

    if (isPending) {
        return <Loader />
    }
    console.log(parcelInfo);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
        } else {
            // send intention to server
            console.log(paymentMethod);
            try {
                setLoading(true)
                const res = await axiosSecure.post('/create-payment-intent', { amount: parcelInfo?.cost })
                const { error, paymentIntent } = await stripe.confirmCardPayment(res.data.clientSecret, {
                    payment_method: { card },
                });

                console.log(paymentIntent);

                if (error) {
                    console.error("Payment error:", error.message);
                } else if (paymentIntent.status === "succeeded") {
                    const paymentInfo = {
                        userEmail: user?.email, // from context or props
                        amount: parcelInfo?.cost,
                        transactionId: paymentIntent.id,
                        currency: paymentIntent.currency,
                        status: paymentIntent.status,
                        paymentMethod: paymentIntent.payment_method_types
                    };
                    const res = await axiosSecure.patch(`/parcels/${id}`, {
                        status: "paid",
                        paymentInfo
                    })
                    if (res.data) {
                        Swal.fire("Payment Success!", "Parcel has been confirmed!", "success");
                        navigate('/dashboard/myparcels')
                        console.log(res.data);
                    }
                }

            } catch (error) {
                console.log(error.message);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        }

    }

    return (
        <div className="min-h-screen flex justify-center items-center flex-col">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                Complete Your Payment
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-md rounded-lg p-6 w-full max-w-lg mx-auto border border-gray-200">
                <label className="font-medium text-gray-700 block">Card Details</label>
                <div className="border border-gray-300 rounded-md p-3 shadow-sm bg-gray-50">
                    <CardElement options={{ style: { base: { fontSize: '16px', color: '#1f2937' } } }} />
                </div>

                <button
                    type="submit"
                    disabled={!stripe}
                    className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {
                        loading ?
                            <Spinner />
                            :
                            `Pay ৳${parcelInfo?.cost}`
                    }
                </button>

                {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                )}
            </form>
        </div>
    );
};

export default CheckOutForm;