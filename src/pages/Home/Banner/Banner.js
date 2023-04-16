import React from 'react';
import "./Banner.css"
import bannerimg from '../../../Assest/images/logos/Frame.png'


const Banner = () => {
    return (
       <>
        <div className="hero min-h-screen bg-amber-400" id='banner'>
            <div className="hero-content flex-col lg:flex-row-reverse">
               <div className="">
               <img src={bannerimg} alt='banner-img' className="w-full" />
               </div>
                <div>
                    <h1 className="text-5xl font-bold">Let’s Grow Your<br></br>
                        Brand To The<br></br>
                        Next Level!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Hire Me</button>
                </div>
            </div>
        </div>
        <div className=" grid grid-cols-5 gap-5">
         


        


        </div>
       </>
    );
};

export default Banner;