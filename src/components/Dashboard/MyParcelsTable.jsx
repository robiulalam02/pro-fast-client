import React from 'react';
import moment from 'moment';
import { FaTrashAlt, FaEye } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";

const MyParcelsTable = ({ parcels, handleDelete, handlePay }) => {
    return (
        <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                <tr>
                    <th className="px-5 py-3">Tracking ID</th>
                    <th className="px-5 py-3">Parcel Name</th>
                    <th className="px-5 py-3">Cost</th>
                    <th className="px-5 py-3">Date</th>
                    <th className="px-5 py-3">Payment</th>
                    <th className="px-5 py-3 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {parcels?.length > 0 ? (
                    parcels.map((parcel, index) => (
                        <tr
                            key={parcel._id}
                            className={`border-t ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 transition`}
                        >
                            <td className="px-5 py-3 font-mono text-blue-700">{parcel.trackingId}</td>
                            <td className="px-5 py-3">{parcel.title || "N/A"}</td>
                            <td className="px-5 py-3 text-green-600 font-semibold">৳{parcel.cost}</td>
                            <td className="px-5 py-3 text-gray-700">
                                {moment(parcel.creationTime).format("MMM D, YYYY")}
                            </td>
                            <td className="px-5 py-3 capitalize">
                                <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${parcel.paymentStatus === "paid"
                                        ? "bg-green-500 text-white"
                                        : "bg-yellow-400 text-black"
                                        }`}
                                >
                                    {parcel.paymentStatus}
                                </span>
                            </td>
                            <td className="px-5 py-3 space-x-2 flex justify-center">
                                <button
                                    title="View Details"
                                    className="inline-flex items-center px-3 py-1.5 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                                    onClick={() =>
                                        (window.location.href = `/dashboard/parcels/${parcel._id}`)
                                    }
                                >
                                    <FaEye className="mr-1" /> Details
                                </button>
                                {
                                    parcel.paymentStatus === "unpaid" &&
                                    <button
                                        title="View Details"
                                        className="inline-flex items-center px-3 py-1.5 text-xs bg-success text-white rounded-md hover:bg-success/70 transition"
                                        onClick={() => handlePay(parcel._id)}
                                    >
                                        <BsCashCoin className="mr-1" /> Pay
                                    </button>
                                }
                                <button
                                    onClick={() => handleDelete(parcel._id)}
                                    title="Delete Parcel"
                                    className="inline-flex items-center px-3 py-1.5 text-xs bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                                >
                                    <FaTrashAlt className="mr-1" /> Cancel
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6" className="text-center py-6 text-gray-500">
                            No parcels found.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default MyParcelsTable;