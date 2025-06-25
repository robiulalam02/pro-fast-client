import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import moment from 'moment';
import { FaTrashAlt, FaEye } from "react-icons/fa";
import { BiPackage } from "react-icons/bi";

const MyParcels = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: parcels } = useQuery({
        queryKey: ["my-parcels", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user?.email}`)
            return res.data
        }
    })

    console.log(parcels);

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <BiPackage className="text-purple-600 text-xl" />
                My Parcels
            </h2>
            <div className="overflow-x-auto rounded shadow">
                <table className="min-w-full text-sm">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 text-left">Tracking ID</th>
                            <th className="px-4 py-2 text-left">Cost</th>
                            <th className="px-4 py-2 text-left">Date</th>
                            <th className="px-4 py-2 text-left">Payment</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcels?.map(parcel => (
                            <tr key={parcel._id} className="border-t">
                                <td className="px-4 py-2">{parcel.trackingId}</td>
                                <td className="px-4 py-2">৳{parcel.cost}</td>
                                <td className="px-4 py-2">{moment(parcel.creationTime).format("MMM D, YYYY")}</td>
                                <td className="px-4 py-2 capitalize">
                                    <span className={`px-2 py-1 rounded text-white text-xs ${parcel?.paymentStatus === "paid" ? "bg-green-500" : "bg-yellow-500"}`}>
                                        {parcel?.paymentStatus}
                                    </span>
                                </td>
                                <td className="px-4 py-2 space-x-2">
                                    <button
                                        title="View Details"
                                        className="inline-flex items-center px-2 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                                        onClick={() => window.location.href = `/dashboard/parcels/${parcel._id}`}
                                    >
                                        <FaEye className="mr-1" /> Details
                                    </button>
                                    <button
                                        title="Delete Parcel"
                                        className="inline-flex items-center px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        <FaTrashAlt className="mr-1" /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {parcels?.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center py-4 text-gray-500">
                                    No parcels found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;