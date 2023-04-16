import React from 'react';

import caroselimg1 from '../../../Assest/images/carousel-1.png'
import caroselimg2 from '../../../Assest/images/carousel-2.png'
import caroselimg3 from '../../../Assest/images/carousel-3.png'
import caroselimg4 from '../../../Assest/images/carousel-4.png'
import caroselimg5 from '../../../Assest/images/carousel-5.png'

const OurRecentWorks = () => {
    return (
       <div className=' bg-black'>
       <h1 className='text-4xl text-center my-10 text-white font-bold'>Here are some of <span className='text-green-400 font-bold'>our works</span> </h1>
        <div className=' '> 
            <div className="carousel w-5/6 h-96my-5 mx-auto px-5">
                <div id="item1" className="carousel-item w-1/3 mx-3 my-5">
                    <img src={caroselimg1} className="w-full hover:scale-y-125   " />
                </div>
                <div id="item2" className="carousel-item w-1/3 mx-3 my-5" >
                    <img src={caroselimg2} className="w-full hover:scale-y-125" />
                </div>
                <div id="item3" className="carousel-item w-1/3 mx-3 my-5">
                    <img src={caroselimg3} className="w-full hover:scale-y-125" />
                </div>
                <div id="item4" className="carousel-item w-1/3 mx-3 my-5">
                    <img src={caroselimg5} className="w-full hover:scale-y-125 rounded" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
       </div>
    );
};

export default OurRecentWorks;