import axios from 'axios';
import { useState } from 'react';

import "./addServices.scss"

const AddServices = () => {

    const initStateService = {
        title:"",
        descr:"",
        path:"",
        passing: [],
        prices: [],
        warnings: [],
        icon:"",
    };

    const [service, setService] = useState(initStateService);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setService((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleArrayChange = (index, field, value, arrayName) => {
        const updatedArray = [...service[arrayName]];
        updatedArray[index][field] = value;
        setService({ ...service, [arrayName]: updatedArray });
    };
    
    const handleAddArray = (arrayName, newItem) => {
        setService({
            ...service,
            [arrayName]: [
                ...service[arrayName],
                newItem,
            ],
        });
    };
    
    const handleRemoveArray = (index, arrayName) => {
        const updatedArray = [...service[arrayName]];
        updatedArray.splice(index, 1);
        setService({ ...service, [arrayName]: updatedArray });
    };
    

    const handleClick = async e => {
        e.preventDefault();
        try {
            await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/services`, service);
            setService(initStateService);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='formAddServices'>
            <div className="container">
                <h6>Додай нову послугу</h6>
                <input type="text" name="title" value={service.title} onChange={handleChange} placeholder="Назва послуги"/>
                <textarea cols="30" rows="10" value={service.descr} name="descr" onChange={handleChange} placeholder="Опис послуги"/>
                <input type="text" name="path" value={service.path} onChange={handleChange} placeholder="Шлях до послуги"/>
                <div>
                    <h6>Passing</h6>
                    {service.passing.map((item, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={item.stage}
                                onChange={(e) => handleArrayChange(index, "stage", e.target.value, 'passing')}
                                placeholder={`Passing ${index + 1}`}
                            />
                            <button className="formAddServices delete btn" onClick={() => handleRemoveArray(index, 'passing')}>Видалити</button>
                        </div>
                    ))}
                    <button className="formAddServices add btn" onClick={() => handleAddArray('passing', { stage: "", id: service.passing.length + 1 })}>Додати Passing</button>
                </div>
                <div>
                    <h6>Prices</h6>
                    {service.prices.map((item, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={item.price}
                                onChange={(e) => handleArrayChange(index, "price", e.target.value, 'prices')}
                                placeholder={`Prices ${index + 1}`}
                            />
                            <button className="formAddServices delete btn" onClick={() => handleRemoveArray(index, 'prices')}>Видалити</button>
                        </div>
                    ))}
                    <button className="formAddServices add btn" onClick={() => handleAddArray('prices', { price: "", id: service.prices.length + 1 })}>Додати Prices</button>
                </div>
                <div>
                    <h6>Warnings</h6>
                    {service.warnings.map((item, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={item.title}
                                onChange={(e) => handleArrayChange(index, "title", e.target.value, 'warnings')}
                                placeholder={`Title ${index + 1}`}
                            />
                            <input
                                type="text"
                                value={item.content}
                                onChange={(e) => handleArrayChange(index, "content", e.target.value, 'warnings')}
                                placeholder={`Content ${index + 1}`}
                            />
                            <button className="formAddServices delete btn" onClick={() => handleRemoveArray(index, 'warnings')}>Видалити</button>
                        </div>
                    ))}
                    <button className="formAddServices add btn" onClick={() => handleAddArray('warnings', { title: "", content: "", id: service.warnings.length + 1 })}>Додати Warnings</button>
                </div>

                <button className="formAddServices send btn" onClick={handleClick}>Відправити на сервер</button>
            </div>
        </div>
    )
}

export default AddServices;