import React from 'react';

const Service = ({ service }) => {
    const {name,details,img} =service;
    return (
        <div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl my-5">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl w-16 h-16" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;