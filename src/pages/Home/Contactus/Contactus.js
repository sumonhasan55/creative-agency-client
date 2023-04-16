import React from 'react';

const Contactus = () => {
    return (
        <div>
            <div className="hero min-h-screen  bg-amber-400">
                <div className="hero-content flex-col lg:flex-row-reverse w-3/4 ">
                    <div className="text-center lg:text-left mx-10 ">
                        <h1 className="text-3xl font-bold my-10">Let us handle your project, professionally!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm p-10">
                        <div className="card-body">
                            <div className="form-control mt-5">

                                <input type="text" placeholder="Your email address" className="input input-bordered" />
                            </div>
                            <div className="form-control my-5">

                                <input type="text" placeholder="Your name/Your company name" className="input input-bordered" />

                            </div>
                            <div className="">
                            <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full max-w-xs h-96" ></textarea>
                            </div>
                            <div className="form-control mt-6 my-5">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contactus;