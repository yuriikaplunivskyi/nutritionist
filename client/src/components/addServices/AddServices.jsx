import axios from 'axios';
import { useState } from 'react';

import "./addServices.scss"

const AddServices = () => {

    const initStateService = {
        title:"",
        descr:"",
        path:"",
        icon:"",
        passing: [],
        prices: [],
        warnings: [],
    };

    const [service, setService] = useState(initStateService);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setService((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    

    const handlePassingChange = (index, field, value) => {
        const updatedPassing = [...service.passing];
        updatedPassing[index][field] = value;
        setService({ ...service, passing: updatedPassing });
    };

    const handleAddPassing = () => {
        setService({
            ...service,
            passing: [
                ...service.passing,
                { stage: "", id: service.passing.length + 1 },
            ],
        });
    };

    const handleRemovePassing = (index) => {
        const updatedPassing = [...service.passing];
        updatedPassing.splice(index, 1);
        setService({ ...service, passing: updatedPassing });
    };

    const handlePricesChange = (index, field, value) => {
        const updatedPrices = [...service.prices];
        updatedPrices[index][field] = value;
        setService({ ...service, prices: updatedPrices });
    };

    const handleAddPrices = () => {
        setService({
            ...service,
            prices: [
                ...service.prices,
                { price: "", id: service.prices.length + 1 },
            ],
        });
    };

    const handleRemovePrices = (index) => {
        const updatedPrices = [...service.prices];
        updatedPrices.splice(index, 1);
        setService({ ...service, prices: updatedPrices });
    };

    const handleWarningsChange = (index, field, value) => {
        const updatedWarnings = [...service.warnings];
        updatedWarnings[index][field] = value;
        setService({ ...service, warnings: updatedWarnings });
    };

    const handleAddWarnings = () => {
        setService({
            ...service,
            warnings: [
                ...service.warnings,
                { title: "", content: "", id: service.warnings.length + 1 },
            ],
        });
    };

    const handleRemoveWarnings = (index) => {
        const updatedWarnings = [...service.warnings];
        updatedWarnings.splice(index, 1);
        setService({ ...service, warnings: updatedWarnings });
    };

    

    const handleClick = async e => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/services", service);
            console.log(service);
            setService(initStateService);
            

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='formAddServices'>
            <div className="container">
                <h6>Додай нову послугу</h6>
                <input type="text" name="title" onChange={handleChange} placeholder="Назва послуги"/>
                <textarea cols="30" rows="10"  name="descr" onChange={handleChange} placeholder="Опис послуги"/>
                <input type="text" name="path" onChange={handleChange} placeholder="Шлях до послуги"/>
                <div>
                    <h6>Passing</h6>
                    {service.passing.map((item, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={item.stage}
                                onChange={(e) => handlePassingChange(index, "stage", e.target.value)}
                                placeholder={`Passing ${index + 1}`}
                            />
                            <button className="formAddServices-delete btn" onClick={() => handleRemovePassing(index)}>Видалити</button>
                        </div>
                    ))}
                    <button className="formAddServices-add btn" onClick={handleAddPassing}>Додати Passing</button>
                </div>
                <div>
                    <h6>Prices</h6>
                    {service.prices.map((item, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={item.price}
                                onChange={(e) => handlePricesChange(index, "price", e.target.value)}
                                placeholder={`Prices ${index + 1}`}
                            />
                            <button className="formAddServices-delete btn" onClick={() => handleRemovePrices(index)}>Видалити</button>
                        </div>
                    ))}
                    <button className="formAddServices-add btn" onClick={handleAddPrices}>Додати Prices</button>
                </div>
                <div>
                    <h6>Warnings</h6>
                    {service.warnings.map((item, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={item.title}
                                onChange={(e) => handleWarningsChange(index, "title", e.target.value)}
                                placeholder={`Title ${index + 1}`}
                            />
                            <input
                                type="text"
                                value={item.content}
                                onChange={(e) => handleWarningsChange(index, "content", e.target.value)}
                                placeholder={`Content ${index + 1}`}
                            />
                            <button className="formAddServices-delete btn" onClick={() => handleRemoveWarnings(index)}>Видалити</button>
                        </div>
                    ))}
                    <button className="formAddServices-add btn" onClick={handleAddWarnings}>Додати Warnings</button>
                </div>

                <button className="formAddServices-send btn" onClick={handleClick}>Відправити на сервер</button>
            </div>
        </div>
    )
}

export default AddServices;