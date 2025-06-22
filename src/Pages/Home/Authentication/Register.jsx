import React, { use, useState } from 'react';
import { useForm } from 'react-hook-form';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { NavLink } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const {userSignUp, googleSignIn} = useAuth();
    const [showPass, setShowPass] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        // sign up new user via firebase

        const {name, photo, email, password} = data;

        userSignUp(email, password)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err.message);
        })

    }

    const handleGoogleSignIn = () => {
        // sign in using google provider

        googleSignIn()
        .then(res=>{
            console.log(res);
        })
    }

    return (
        <div className="h-full flex items-center justify-center">
            <div className="w-full max-w-md  p-8">
                {/* Heading */}
                <h2 className="text-4xl font-extrabold text-start text-gray-800">Create Account Now</h2>
                <p className="text-start mb-6">Register to get started</p>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your full name"
                            {...register("name", { required: true })}
                        />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Photo URL</label>
                        <input
                            type="url"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter photo URL"
                            {...register("photo")}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                            {...register('email', { required: true })}
                        />
                    </div>

                    {/* Password */}
                    <div className='relative'>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type={showPass? 'text' : 'password'}
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Create a password"
                            {...register('password', {
                                required: true, minLength: 6, pattern: {
                                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                                    message:
                                        "Password must be include uppercase, number, and special character",
                                }
                            })}
                        />
                        <button onClick={()=> setShowPass(!showPass)} type='button' className='absolute top-8 right-4'>
                            {
                                showPass ? 
                                <VscEye />
                                :
                                <VscEyeClosed />
                            }
                        </button>
                    </div>

                    {/* Error Message */}

                    {errors.email?.type === "required" && (
                        <p role="alert" className='text-sm text-error'>please enter your email</p>
                    )}

                    {errors.password?.type === "required" && (
                        <p role="alert" className='text-sm text-error'>password is required</p>
                    )}

                    {errors.name?.type === "required" && (
                        <p role="alert" className='text-sm text-error'>please enter your name</p>
                    )}

                    {errors.password?.type === "minLength" && (
                        <p role="alert" className='text-sm text-error'>password must be 6 characters or long</p>
                    )}

                    {
                        errors.password && (
                            <p role="alert" className='text-sm text-error'>{errors.password.message}</p>
                        )
                    }

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
                    >
                        Register
                    </button>
                </form>

                {/* Link to Login */}
                <p className="text-sm text-center mt-4 text-gray-600">
                    Already have an account? <NavLink to="/auth/login" className="text-blue-500 hover:underline">login</NavLink>
                </p>

                {/* Google Register */}
                <div className="mt-6">
                    <button
                        onClick={handleGoogleSignIn}
                        type="button"
                        className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition"
                    >
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        <span className="text-sm text-gray-700">Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Register;