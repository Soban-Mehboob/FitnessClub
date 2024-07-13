import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        alert('Form submitted successfully!');
        reset(); // This will reset the form fields
    };

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="bg-black shadow-md rounded-lg p-6 flex w-3/4">
                <div className="w-1/2 flex flex-col justify-center items-center p-6 border-r border-gray-200">
                    <h2 className="text-2xl font-semibold mb-4 text-center text-red-600">
                        "Pushing through the pain, embracing the gain."
                    </h2>
                </div>
                <div className="w-1/2 p-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                {...register('name', { required: true })}
                            />
                            {errors.name && <p className="text-red-500 text-xs italic">Please enter your name.</p>}
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                {...register('email', { required: true })}
                            />
                            {errors.email && <p className="text-red-500 text-xs italic">Please enter your email.</p>}
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                {...register('message', { required: true })}
                                rows="5"
                                style={{ resize: 'none' }}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-xs italic">Please enter your message.</p>}
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
