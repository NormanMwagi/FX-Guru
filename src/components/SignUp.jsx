import React from 'react'

const SignUp = () =>
{
    return (
        <div>
            <form className="w-full max-w-sm">
                <div className='mt-5 text-4xl text-gray-600 font-bold flex justify-center pt-35 pb-10'>
                    <h1>Sign Up</h1>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-2/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Name
                        </label>
                    </div>
                    <div className="md:w-full">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Enter name' />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-2/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Email
                        </label>
                    </div>
                    <div className="md:w-full">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Enter email' />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-2/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Phone Number
                        </label>
                    </div>
                    <div className="md:w-full">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Enter phone number' />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-2/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Password
                        </label>
                    </div>
                    <div className="md:w-full">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-2/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Password
                        </label>
                    </div>
                    <div className="md:w-full">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-2/3"></div>
                    <div className="md:w-full">
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp
