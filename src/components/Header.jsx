import React from 'react'

const Header = () =>
{
    return (
        <div>
            <div className='mx-3 my-6 flex flex-col'>
                <h2 className='flex justify-center pb-9 text-2xl font-bold'>Fx GURU</h2>
                <h4 className='font-medium flex justify-center pb-4'>Strictly for Traders Seeking a Consistently Profitable Trading System</h4>
                <h1 className='flex justify-center font-bold text-5xl pb-2'><span className='text-blue-400'>Forex</span> <span className='text-green-500 px-2'>Trading</span> Is A Skill…</h1>
                <h1 className='flex justify-center text-5xl font-bold pb-3'>And We Will Teach You How To <span className='text-blue-400 px-2'>Master</span><span className='text-green-500 px-2'>It</span> </h1>
                <h4 className='flex justify-center font-medium pb-6'>You Are One Decision Away From Financial Freedom</h4>
            </div>
        </div>
    )
}

export default Header
