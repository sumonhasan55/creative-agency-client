import React from 'react';

import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import OurRecentWorks from '../OurRecentWorks/OurRecentWorks';
import ClientFeedback from './ClientFeedback/ClientFeedback';
import Contactus from '../Contactus/Contactus';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OurRecentWorks></OurRecentWorks>
            <ClientFeedback></ClientFeedback>
            <Contactus></Contactus>
           
            
        </div>
    );
};

export default Home;