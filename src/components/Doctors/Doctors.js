import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Doctors = () => {
    const { id } = useParams();
    const [doctorDetails, setDoctorDetails] = useState([]);
    const [singleDoctor, setSingleDoctor] = useState({});
    useEffect(() => {
        fetch('/../doctorsDetails.json')
            .then(res => res.json())
            .then(data => setDoctorDetails(data))
    }, []);

    useEffect(() => {
        const foundDoctor = doctorDetails.find(doctor => doctor.id===id)
        console.log(foundDoctor);
        setSingleDoctor(foundDoctor);
    },[doctorDetails]);

    return (
        <div>
            <h1>{id}</h1>
            <h2>{ singleDoctor?.name}</h2>
        </div>
    );
};

export default Doctors;