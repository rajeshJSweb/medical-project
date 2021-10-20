import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();

    const [serviceDetails, setServicesDetails] = useState([]);

    useEffect(() => {
        fetch('/../services.json')
            .then(res => res.json())
        .then(data => setServicesDetails(data))
    },[])

    useEffect(() => {
        const foundData = serviceDetails.find((service) => service.login.id === id)
        console.log(foundData);
    },[])
    return (
        <div>
            <h2>This is details{id}</h2>
        </div>
    );
};

export default Details;