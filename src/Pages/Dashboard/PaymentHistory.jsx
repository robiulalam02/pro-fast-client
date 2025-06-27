import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Loader from '../../components/Loader/Loader';
import { BiDollarCircle } from 'react-icons/bi';
import { MdOutlinePayment } from 'react-icons/md';
import moment from 'moment';

const PaymentHistory = () => {
    const { user } = useAuth();
    const userEmail = user?.email;
    const axiosSecure = useAxiosSecure();

    const { isPending, data: payments = [] } = useQuery({
        queryKey: ['paymentHistory', userEmail],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${userEmail}`)
            return res.data;
        }
    });

    if (isPending) {
        return <Loader />
    }

    console.log(history);

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MdOutlinePayment className="text-2xl text-primary" />
                Payment History
            </h2>

            <div className="overflow-x-auto shadow rounded border border-gray-200 bg-white">
                <table className="table w-full text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
                        <tr>
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3">Parcel ID</th>
                            <th className="px-4 py-3">Amount</th>
                            <th className="px-4 py-3">Txn ID</th>
                            <th className="px-4 py-3">Method</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.length > 0 ? (
                            payments.map((payment, index) => (
                                <tr
                                    key={payment._id}
                                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                                >
                                    <td className="px-4 py-3">{index + 1}</td>
                                    <td className="px-4 py-3 text-blue-700 font-mono">{payment.parcelId}</td>
                                    <td className="px-4 py-3 text-green-600 font-semibold flex items-center gap-1">
                                        <BiDollarCircle className="text-base" /> ${payment.amount}
                                    </td>
                                    <td className="px-4 py-3 text-gray-700 text-xs break-all">{payment.transactionId}</td>
                                    <td className="px-4 py-3 capitalize">{payment.paymentMethod?.[0]}</td>
                                    <td className="px-4 py-3">
                                        <span
                                            className={`badge text-xs ${payment.status === 'succeeded' ? 'badge-success' : 'badge-warning'}`}
                                        >
                                            {payment.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">{moment(payment.date).format('MMM D, YYYY - hh:mm A')}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center py-6 text-gray-500">
                                    No payment records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;