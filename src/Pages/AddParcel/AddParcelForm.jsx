import React from 'react';
import toast from 'react-hot-toast';
import { FiSend } from 'react-icons/fi';
import { HiOutlineCube, HiOutlineUserAdd } from "react-icons/hi";
import useAuth from '../../Hooks/useAuth';


const AddParcelForm = ({ onSubmit, wareHouseData, watch, handleSubmit, register, errors }) => {

    const {user} = useAuth();

    // get unique regions
    const uniqueRegion = [...new Set(wareHouseData.map(data => data.region))];

    // get unique districts by selected region
    const getDistrictByRegion = (region) => {
        const filter = wareHouseData.filter(item => item.region === region);
        const uniqueDistricts = [...new Set(filter.map(item => item.district))];
        return uniqueDistricts;
    }



    const type = watch("type");
    const senderRegion = watch("senderRegion");
    const reciverRegion = watch("reciverRegion");

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Parcel Info */}
            <div className='border-b border-gray-200 pb-10'>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <HiOutlineCube className="text-blue-600" /> Parcel Info
                </h3>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium mb-1">Type</label>
                        <select {...register("type", { required: true })} className="select select-bordered w-full">
                            <option value="">Select Type</option>
                            <option value="document">Document</option>
                            <option value="non-document">Non-document</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Title</label>
                        <input {...register("title", { required: true })} className="input input-bordered w-full" />
                    </div>
                    {type === "non-document" && (
                        <div>
                            <label className="block font-medium mb-1">Weight (kg)</label>
                            <input type="number" step="0.1" {...register("weight")} className="input input-bordered w-full" />
                        </div>
                    )}
                </div>
            </div>

            <div className="flex justify-between gap-4 flex-col md:flex-row">
                {/* Sender Info */}
                <div className="w-full">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <FiSend className="text-green-600" /> Sender Info
                    </h3>
                    <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium mb-1">Name</label>
                            <input value={user?.displayName} {...register("senderName", { required: true })} className="input input-bordered w-full" readOnly />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Contact</label>
                            <input {...register("senderContact", { required: true })} className="input input-bordered w-full" />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Region</label>
                            <select {...register("senderRegion", { required: true })} className="select select-bordered w-full">
                                <option value="">Select Region</option>
                                {
                                    uniqueRegion.map(region =>
                                        <option value={region}>{region.toUpperCase()}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Service Center</label>
                            <select {...register("senderCenter", { required: true })} className="select select-bordered w-full">
                                <option value="">Select Center</option>
                                {
                                    getDistrictByRegion(senderRegion)?.map(district =>
                                        <option value={district}>{district}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block font-medium mb-1">Address</label>
                            <textarea {...register("senderAddress", { required: true })} className="textarea textarea-bordered w-full"></textarea>
                        </div>
                        <div className="md:col-span-1">
                            <label className="block font-medium mb-1">Pickup Instruction</label>
                            <input {...register("pickupInstruction")} className="input input-bordered w-full" />
                        </div>
                    </div>
                </div>

                {/* Receiver Info */}
                <div className="w-full">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <HiOutlineUserAdd className="text-purple-600" /> Receiver Info
                    </h3>
                    <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium mb-1">Name</label>
                            <input {...register("receiverName", { required: true })} className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Contact</label>
                            <input {...register("receiverContact", { required: true })} className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Region</label>
                            <select {...register("reciverRegion", { required: true })} className="select select-bordered w-full">
                                <option value="">Select Region</option>
                                {
                                    uniqueRegion.map(region =>
                                        <option value={region}>{region.toUpperCase()}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Service Center</label>
                            <select {...register("receiverCenter", { required: true })} className="select select-bordered w-full">
                                <option value="">Select Center</option>
                                {
                                    getDistrictByRegion(reciverRegion)?.map(district =>
                                        <option value={district}>{district}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block font-medium mb-1">Address</label>
                            <textarea {...register("receiverAddress", { required: true })} className="textarea textarea-bordered w-full"></textarea>
                        </div>
                        <div className="md:col-span-1">
                            <label className="block font-medium mb-1">Delivery Instruction</label>
                            <input {...register("deliveryInstruction")} className="input input-bordered w-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="text-right">
                <button type="submit" className="btn btn-primary">Submit Parcel</button>
            </div>

            {
                errors.title?.type==="required" && (
                    toast.error('please enter parcel name')
                )
            }
        </form>
    )
}
export default AddParcelForm;
