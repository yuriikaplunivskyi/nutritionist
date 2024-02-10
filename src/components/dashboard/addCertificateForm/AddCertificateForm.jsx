import { useState } from 'react';
import axios from 'axios';
import "./addCertificateForm.scss";

const AddCertificateForm = () => {
    const initData = {
        school: '',
        title: '',
        img_path: '', 
    };

    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState(initData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleFileDrop = (e) => {
        e.preventDefault();
        const selectedFile = e.dataTransfer.files[0];
        setFile(selectedFile);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
        const formDataForUpload = new FormData();
        formDataForUpload.append('certificateImage', file);
        formDataForUpload.append('school', formData.school);
        formDataForUpload.append('title', formData.title);

        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/uploadCertificate`, formDataForUpload, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        
        setFormData((prevData) => ({
            ...prevData,
            img_path: response.data.file,
        }));

        console.log(response.data);

        setFormData(initData);
        setFile(new File([], ''));
        } catch (error) {
        console.error('Error uploading certificate:', error);
        }
    };

    return (
        <div className='addCertificateForm'>
            <div className="container">
                <h6>Додати сертифікат</h6>
                <form onSubmit={handleFormSubmit}>
                    <label>Організація/школа:</label>
                    <input type="text" name="school" value={formData.school} onChange={handleInputChange} required />

                    <label>Назва програми:</label>
                    <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />

                    <div className="addCertificateForm__wrapper">
                    <label>Перетягни чи вибери зображення сертифіката</label>
                    <input className="addCertificateForm__inputFile" type="file" onChange={handleFileChange} onDrop={handleFileDrop} accept="image/*" />
                    </div>

                    <button className='btn btn-add' type="submit">Відпраити дані</button>
                </form>

                
                {formData.img_path && <img src={formData.img_path} alt="Certificate Preview" />}
            </div>
        </div>
    );
};

export default AddCertificateForm;
