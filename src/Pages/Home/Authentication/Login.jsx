import React, { useState } from 'react';
import Logo from '../../Shared/ProfastLogo/Logo';
import { NavLink, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {

    const { googleSignIn } = useAuth();
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = data => {
        console.log(data);
    }

    const handleGoogleSignIn = () => {
        // sign in using google provider

        googleSignIn()
            .then(() => {
                navigate('/')
            })
    }

    return (
        <div className="flex items-center justify-center h-full">
            <div className="w-full max-w-md p-8 ">
                {/* Heading */}
                <h2 className="text-4xl font-extrabold text-start text-gray-800">Welcome Back</h2>
                <p className="text-start mb-6">Login to your account</p>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                            {...register('email', { required: true })}
                        />
                    </div>
                    <div className='relative'>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type={showPass ? 'text' : 'password'}
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
                        <button onClick={() => setShowPass(!showPass)} type='button' className='absolute top-8 right-4'>
                            {
                                showPass ?
                                    <VscEye />
                                    :
                                    <VscEyeClosed />
                            }
                        </button>
                    </div>

                    {errors.email?.type === "required" && (
                        <p role="alert" className='text-sm text-error'>please enter your email</p>
                    )}
                    {errors.password?.type === "required" && (
                        <p role="alert" className='text-sm text-error'>password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                        <p role="alert" className='text-sm text-error'>password must be 6 characters or long</p>
                    )}
                    {errors.password && (
                        <p role="alert" className='text-sm text-error'>{errors.password.message}</p>
                    )}

                    <div className="text-right">
                        <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                {/* Register Navigation */}
                <p className="text-sm text-center mt-4 text-gray-600">
                    Don't have an account? <NavLink to="/auth/register" className="text-blue-500 hover:underline">register</NavLink>
                </p>

                {/* Google Login */}
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

export default Login;