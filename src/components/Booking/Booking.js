import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    const [singleService, setSingleService] = useState();


    useEffect(() => {
        fetch('/../services.json')
            .then(res => res.json())
            .then(data =>
                setServices(data))
    }, []);

    useEffect(() => {
        const getServices = services.find(service => service.id === serviceId)
        console.log(getServices);
    },[services])

    return (
        <div>
            <h2>This is booking page: { serviceId}</h2>
            <h2>This is booking page{singleService?.serviceName}</h2> 
        </div>
    );
};

export default Booking;