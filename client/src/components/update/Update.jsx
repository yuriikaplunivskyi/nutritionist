import axios from 'axios';
import { useEffect, useState } from 'react';
import "./update.scss";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Update = () => {

    const initStateService = {
        title:"",
        descr:"",
        path:"",
        passing: [],
        prices: [],
        warnings: [],
        icon:"",
    };

    const location = useLocation();

    const serviceId = location.pathname.split("/")[2];
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
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/services/${serviceId}`);
                console.log(response.data);
                const parsedData = {
                    ...response.data,
                    passing: JSON.parse(response.data.passing),
                    prices: JSON.parse(response.data.prices),
                    warnings: JSON.parse(response.data.warnings),
                };
    
                setService(parsedData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [serviceId]);

    const handleClick = async e => {
        e.preventDefault();
        try {
            await axios.put("http://localhost:8800/services/"+ serviceId, service);
            setService(initStateService);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='updateForm'>
            <div className="container">
                    <h6>Змінити послугу</h6>
                    <input type="text" name="title" value={service.title} onChange={handleChange} placeholder="Назва послуги"/>
                    <textarea cols="30" rows="10" value={service.descr} name="descr" onChange={handleChange} placeholder="Опис послуги"/>
                    <input type="text" name="path" value={service.path} onChange={handleChange} placeholder="Шлях до послуги"/>
                    <div>
                        <h6>Passing</h6>
                        {service.passing.map((item, index) => (
                            <div key={item.id}>
                                <input
                                    type="text"
                                    value={item.stage}
                                    onChange={(e) => handleArrayChange(index, "stage", e.target.value, 'passing')}
                                    placeholder={`Passing ${index + 1}`}
                                />
                                <button className="updateForm-delete btn" onClick={() => handleRemoveArray(index, 'passing')}>Видалити</button>
                            </div>
                        ))}
                        <button className="updateForm-add btn" onClick={() => handleAddArray('passing', { stage: "", id: service.passing.length + 1 })}>Додати Passing</button>
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
                                <button className="updateForm-delete btn" onClick={() => handleRemoveArray(index, 'prices')}>Видалити</button>
                            </div>
                        ))}
                        <button className="updateForm-add btn" onClick={() => handleAddArray('prices', { price: "", id: service.prices.length + 1 })}>Додати Prices</button>
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
                                <button className="updateForm-delete btn" onClick={() => handleRemoveArray(index, 'warnings')}>Видалити</button>
                            </div>
                        ))}
                        <button className="updateForm-add btn" onClick={() => handleAddArray('warnings', { title: "", content: "", id: service.warnings.length + 1 })}>Додати Warnings</button>
                    </div>

                    <button className="updateForm-send btn" onClick={handleClick}>Внести зміни</button>
                </div>
                <Link to="/dashboard">Повернутися в адмінку</Link>
        </div>
    )
}

export default Update;