import React, { useEffect, useState } from 'react';
import Service from './Service';





const Services = () => {
    const [services,setServices] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setServices(data)
        })
    },[])
    
   
    return (
        <div>
            <h1 className='text-3xl my-10 font-semibold text-center font-bold'>Provide awesome <span className='text-green-400'>services</span></h1>
          <div className="lg:grid grid-cols-3 gap-5 my-5">
          {
            services.map(service=><Service
            key={service.id}
            service={service}
            >
            </Service>)
           }
          </div>
         
        </div>
    );
};

export default Services;