import React from 'react';
import Container from '../../components/Loader/Container/Container';
import AddParcelForm from './AddParcelForm'
import { useLoaderData } from 'react-router';
import { useForm } from 'react-hook-form';
import { calculateCost, generateTrackingId } from '../../API/utils';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const AddParcel = () => {
    const {user} = useAuth();
    const wareHouseData = useLoaderData();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        const {
            parcelType, parcelTitle, weight,
            senderName, senderContact, senderRegion, senderCenter,
            receiverName, receiverContact, receiverRegion, receiverCenter,
        } = data;

        const cost = calculateCost(data.type, data.receiverCenter, data.weight, data.senderCenter);

        const result = await Swal.fire({
            title: "Confirm Parcel Info",
            html: `
            <div style="text-align: left; font-size: 14px; line-height: 1.6;">
            <h3 style="margin-bottom: 8px; font-size: 16px; font-weight: 600; color: #1f2937;">📦 Parcel Details</h3>
            <div><strong>Type:</strong> ${parcelType}</div>
            <div><strong>Title:</strong> ${parcelTitle}</div>
            ${parcelType === "non-document" ? `<div><strong>Weight:</strong> ${weight} kg</div>` : ""}

            <hr style="margin: 12px 0; border: none; border-top: 1px solid #ddd;" />

            <h3 style="margin-bottom: 8px; font-size: 16px; font-weight: 600; color: #1f2937;">👤 Sender</h3>
            <div><strong>Name:</strong> ${senderName}</div>
            <div><strong>Contact:</strong> ${senderContact}</div>
            <div><strong>From:</strong> ${senderRegion} → ${senderCenter}</div>

            <hr style="margin: 12px 0; border: none; border-top: 1px solid #ddd;" />

            <h3 style="margin-bottom: 8px; font-size: 16px; font-weight: 600; color: #1f2937;">📍 Receiver</h3>
            <div><strong>Name:</strong> ${receiverName}</div>
            <div><strong>Contact:</strong> ${receiverContact}</div>
            <div><strong>To:</strong> ${receiverRegion} → ${receiverCenter}</div>

            <hr style="margin: 12px 0; border: none; border-top: 1px solid #ddd;" />

            <h3 style="margin-top: 10px; font-size: 16px; font-weight: 700; color: #047857;">
                💰 Delivery Cost: ৳${cost}
            </h3>
            </div>
            `,
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "Confirm",
            cancelButtonText: "Cancel",
        });

        if (result.isConfirmed) {
            // Simulate success
            Swal.fire("Success!", "Parcel has been submitted!", "success");
            console.log("Submitted Data:", { ...data, cost, createdBy: user?.email, creationTime: new Date().toISOString(), delivery_status: "not-collected", payment_status: "unpaid", tracking_id: generateTrackingId() });
            reset();
        }

    };

    return (
        <Container color="bg-base-100">
            <div className="flex flex-col items-start mb-6">
                <h2 className="text-2xl font-bold">Add New Parcel</h2>
                <p className="text-gray-600">Please fill in all the required parcel information</p>
            </div>

            <AddParcelForm onSubmit={onSubmit} wareHouseData={wareHouseData} register={register} handleSubmit={handleSubmit} watch={watch} errors={errors} />
        </Container>
    );
};

export default AddParcel;