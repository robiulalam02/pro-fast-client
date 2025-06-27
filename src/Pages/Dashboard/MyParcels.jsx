import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { BiPackage } from "react-icons/bi";
import MyParcelsTable from '../../components/Dashboard/MyParcelsTable';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const MyParcels = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const { data: parcels, refetch } = useQuery({
        queryKey: ["my-parcels", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user?.email}`)
            return res.data
        }
    })

    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: 'Are you sure?',
            text: "This parcel will be permanently deleted!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#e3342f',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Yes, delete it!',
        });

        if (confirm.isConfirmed) {
            try {
                const res = await axiosSecure.delete(`http://localhost:3000/parcels/${id}`)

                if (res.data.deletedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Deleted!',
                        text: res.data.message || 'Parcel deleted successfully.',
                    });

                    refetch();
                }

            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: err.message,
                });
            }
        }
    };

    const handlePay = (id) => {
        console.log(id);
        navigate(`/dashboard/payment/${id}`)
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                <BiPackage className="text-purple-600 text-2xl" />
                My Parcels
            </h2>

            <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
                <MyParcelsTable parcels={parcels} handleDelete={handleDelete} handlePay={handlePay} />
            </div>
        </div>

    );
};

export default MyParcels;