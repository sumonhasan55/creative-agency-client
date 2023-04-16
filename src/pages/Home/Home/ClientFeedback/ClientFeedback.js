import React from 'react';
import clienimg1 from '../../../../Assest/images/customer-1.png'
import clienimg2 from '../../../../Assest/images/customer-2.png'
import clienimg3 from '../../../../Assest/images/customer-3.png'

const ClientFeedback = () => {
    return (
        <div className='p-5'>
            <div>
                <h1 className='text-center text-4xl font-bold mt-10'>Clients <span className='text-green-400'>Feedback</span> </h1>
            </div>
           <div className="lg:grid grid-cols-3 gap-5 my-5 ">

           <div className=" my-5  bg-base-100 shadow-xl">
                <div className="flex my-5 ">
                    <div className="avatar">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={clienimg1} alt='customer-img' />
                        </div>
                    </div>
                    <div className="content-center mt-5 mx-5">
                        <h1 className='font-bold'>Nash Patrik</h1>
                        <p className='font-semibold text-xs'>CEO, Manpol</p>
                    </div>


                </div>
                <p>"Your creative work is superb, much better than the original and exactly what I want. Also your project management skills on budgeting, scheduling, client communication, and follow-through. A professional job, start to finish.

                    Joe Carlson</p>
            </div>

            <div className="my-5  bg-base-100 shadow-xl">
                <div className="flex my-5">
                    <div className="avatar">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={clienimg1} alt='customer-img' />
                        </div>
                    </div>
                    <div className="content-center mt-5 mx-5">
                        <h1 className='font-bold'>Nash Patrik</h1>
                        <p className='font-semibold text-xs'>CEO, Manpol</p>
                    </div>


                </div>
                <p>"Your creative work is superb, much better than the original and exactly what I want. Also your project management skills on budgeting, scheduling, client communication, and follow-through. A professional job, start to finish.

                    Joe Carlson</p>
            </div>

            <div className="my-5  bg-base-100 shadow-xl">
                <div className="flex my-5">
                    <div className="avatar">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={clienimg1} alt='customer-img' />
                        </div>
                    </div>
                    <div className="content-center mt-5 mx-5">
                        <h1 className='font-bold'>Nash Patrik</h1>
                        <p className='font-semibold text-xs'>CEO, Manpol</p>
                    </div>


                </div>
                <p>"Your creative work is superb, much better than the original and exactly what I want. Also your project management skills on budgeting, scheduling, client communication, and follow-through. A professional job, start to finish.

                    Joe Carlson</p>
            </div>

           </div>
        </div>
    );
};

export default ClientFeedback;