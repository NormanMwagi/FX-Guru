import React from 'react';

const Hero = () =>
{
    return (
        <div className="px-4 py-6 sm:px-6 lg:px-8">
            <div>
                <a className="flex justify-center font-bold text-2xl md:text-3xl py-4 text-center">
                    Receive a
                    <span className="text-blue-400 px-2">Full</span>
                    <span className="text-green-500 px-2">Refund</span>
                    if You Don't Make Any Profit
                    <span className="text-blue-400 px-2">Within</span>
                    <span className="text-green-500 px-2">2 Months</span>
                </a>
            </div>
            <div className="text-base md:text-xl pb-6 space-y-2 text-center">
                <p>If you complete the course, participate in our community chats, and attend every weekly webinar for 2 months but still do not make any profits, then</p>
                <p>you will get all your money back.</p>
                <p className="font-bold">NO QUESTIONS ASKED!</p>
            </div>
            <div className="flex justify-center">
                <button className="bg-green-400 text-white font-bold p-3 md:p-4 rounded-lg hover:bg-green-800 text-center">
                    YES! Give Me Access NOW! <br className="hidden md:inline" />
                    Join 700+ like-minded traders
                </button>
            </div>
            <div className="pt-9 text-center">
                <h2 className="font-bold text-2xl md:text-3xl ">
                    Introducing a
                    <span className="text-blue-400 px-2">MASSIVE</span>
                    <span className="text-green-500 px-2">UPGRADE</span>
                    with Lifetime Access
                </h2>
            </div>
        </div>
    );
};

export default Hero;
