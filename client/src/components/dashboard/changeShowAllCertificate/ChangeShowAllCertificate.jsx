import axios from 'axios';
import { useState, useEffect } from 'react';
import "./changeShowAllCertificate.scss";
import UpdateCertificate from '../updateCertificate/UpdateCertificate';

const ChangeShowAllCertificate = () => {
    const [certificateData, setCertificate] = useState("");
    const [selectedCertificateId, setSelectedCertificateId] = useState(null);

    useEffect(() => {
        const fetchAllCertificateData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/certificates`);
                setCertificate(response.data);
            } catch (error) {
                console.log(error);
                console.error('Error fetching certificate data:', error);
                setCertificate("");
            }
        };

        fetchAllCertificateData();
    }, []);

    const handleDelete = async (id) => {
        try {
            console.log(id)
            await axios.delete(`${import.meta.env.VITE_REACT_APP_API_URL}/certificates/${id}`);
            setCertificate((prevData) =>
                prevData.filter((certificate) => certificate.id !== id)
            );
        } catch (error) {
            console.log("What the error", error);
        }
    }

    const handleUpdate = (id) => {
        setSelectedCertificateId(id);
    }

    return (
        <>
            {selectedCertificateId ? (
                <UpdateCertificate certificateId={selectedCertificateId} setSelectedCertificateId={setSelectedCertificateId} />
            ) : (
                Array.isArray(certificateData) && certificateData.map((certificate) => (
                    <div className="certificate" key={certificate.id}>
                        <div className="certificate__content">
                            <h5>{certificate.title}</h5>
                            <span>{certificate.school}</span>
                            <img src={`http://localhost:8800/public/${certificate.img_path}`} alt={certificate.img_path} />
                        </div>

                        <div className="certificate__btns">
                            <button className="certificate-delete btn" onClick={() => handleDelete(certificate.id)}>Видалити</button>
                            <button className="certificate-change btn" onClick={() => handleUpdate(certificate.id)}>Змінити</button>
                        </div>

                    </div>
                ))
            )}
        </>
    );
}

export default ChangeShowAllCertificate;
