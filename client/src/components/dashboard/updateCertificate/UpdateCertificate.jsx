import axios from 'axios';
import { useState, useEffect } from 'react';

import "./updateCertificate.scss";

const UpdateCertificate = ({ certificateId, setSelectedCertificateId }) => {
    const initState  = {
        title: "",
        school: "",
        img_path: ""
    };

    const [certificate, setCertificate] = useState(initState);
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCertificate((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    useEffect(() => {
        const fetchCertificate = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/certificates/${certificateId}`);
                setCertificate(response.data);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    console.log(`Certificate with ID ${certificateId} not found`);
                } else {
                    console.error('Error fetching certificate:', error);
                }
            }
        };
    
        fetchCertificate();
    }, [certificateId]);
    

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const formDataForUpload = new FormData();
            formDataForUpload.append('school', certificate.school);
            formDataForUpload.append('title', certificate.title);
            if (file) {
                formDataForUpload.append('certificateImage', file);
            }
        
            await axios.put(`http://localhost:8800/certificates/${certificateId}`, formDataForUpload, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        
            setSelectedCertificateId(null);
            setCertificate(initState)
        } catch (error) {
            console.log(error);
        }
    };    

    return (
        <form className='updateCerfForm' onSubmit={handleClick}>
                <h6>Змінити сертифікат</h6>
                <input type="text" name="title" value={certificate.title} onChange={handleChange} placeholder="Назва сертифіката" />
                <input type="text" name="school" value={certificate.school} onChange={handleChange} placeholder="Назва школи" />

                <input type="file" name="img_path" accept="image/*"  onChange={handleFileChange} />
                <img src={`http://localhost:8800/public/${certificate.img_path}`} alt="Certificate Preview" style={{ maxWidth: '300px', maxHeight: '200px' }} />
                
                <button className="send btn" >Внести зміни</button>
        </form>
    );
};

export default UpdateCertificate;

