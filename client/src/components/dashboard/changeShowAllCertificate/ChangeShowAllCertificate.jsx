import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ChangeShowAllCertificate = () => {
    const [ certificateData, setCertificate ] = useState("");

    useEffect(() => {
        const fetchAllServiceData = async () => {
            try {
                const response = await axios.get("http://localhost:8800/certificates");
    
                setCertificate(response.data);
                console.log(response.data);

            } catch (error) {
                console.log(error);
                console.error('Error fetching service data:', error);
                setCertificate("");
            }
        };
    
        fetchAllServiceData();
    }, []);

    const handleDelete = async (id) => {
        try {
            console.log(id)
            await axios.delete("http://localhost:8800/certificates/"+id);
            window.location.reload();
        } catch (error) {
            console.log("What the error", error);
        }
    }
    return (
        <>
        {Array.isArray(certificateData) && certificateData.map((certificate) => (
            <div className="serviceAdmin" key={certificate.id}>
                <div className="service-container" >
                    <div className="service-textContainer">
                    <h2 className="service-title">{certificate.title}</h2>
                    <span>{certificate.school}</span>
                    <img src={certificate.img_path} alt={certificate.img_path}  />
                    </div>
                </div>
                <div className="serviceAdmin-btnWrapper">
                    <button className="serviceAdmin-delete btn" onClick={() => handleDelete(certificate.id)}>Видалити</button>
                    <button className="serviceAdmin-change btn"><Link to={`/admin/update/${certificate.id}`}>Змінити</Link></button>
                </div>
            </div>
        ))}
        </>
    )
}

export default ChangeShowAllCertificate