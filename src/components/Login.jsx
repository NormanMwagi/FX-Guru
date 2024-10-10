import React from 'react';

const Login = () =>
{
    return (
        <div className="max-w-md mx-auto">
            <form className="w-full max-w-sm">
                <div className="mt-5 text-4xl text-gray-600 font-bold text-center pt-35 pb-10">
                    <h1>Log In</h1>
                </div>
                <div className="flex justify-center">
                    <label className="m-2" htmlFor="email">
                        Email
                    </label>
                </div>
                <div className="flex justify-center">
                    <input
                        type="text"
                        className="bg-gray-300 p-2 w-2/3 mx-auto"
                    />
                </div>
                <div className="flex justify-center">
                    <label htmlFor="password" className="m-2">
                        Password
                    </label>
                </div>
                <div className="flex justify-center">
                    <input
                        type="password"
                        className="mb-4 bg-gray-300 p-2 w-2/3 mx-auto"
                    />
                </div>
                <div className="flex justify-center">
                    <button className="rounded p-2 bg-blue-600">Log In</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
