import React from 'react';
import { useState } from 'react';

const AddServices = () => {

    const [service, setService] = useState({
        title:"",
        descr:"",
        path:"",
        icon:"",
        passing: [],
        prices: [],
        warnings: [],
    })

    const handlePassingChange = (index, value) => {
        const updatedPassing = [...service.passing];
        updatedPassing[index] = value;
        setService({ ...service, passing: updatedPassing });
    };

    const handleAddPassing = () => {
        setService({ ...service, passing: [...service.passing, ""] });
    };

    const handleRemovePassing = (index) => {
        const updatedPassing = [...service.passing];
        updatedPassing.splice(index, 1);
        setService({ ...service, passing: updatedPassing });
    };


    const handlePricesChange = (index, value) => {
        const updatedPrices = [...service.prices];
        updatedPrices[index] = value;
        setService({ ...service, prices: updatedPrices });
    };

    const handleAddPrices = () => {
        setService({ ...service, prices: [...service.prices, ""] });
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
            warnings: [...service.warnings, { title: "", content: "" }],
        });
    };

    const handleRemoveWarnings = (index) => {
        const updatedWarnings = [...service.warnings];
        updatedWarnings.splice(index, 1);
        setService({ ...service, warnings: updatedWarnings });
    };

    return (
        <div className='formServices'>
            <h5>Додай нову послугу</h5>
            <input type="text" name="title" placeholder="Назва послуги"/>
            <input type="text" name="descr" placeholder="Назва послуги"/>
            <input type="text" name="path" placeholder="Назва послуги"/>
            <div>
                <h6>Passing</h6>
                {service.passing.map((item, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={item}
                            onChange={(e) => handlePassingChange(index, e.target.value)}
                            placeholder={`Passing ${index + 1}`}
                        />
                        <button onClick={() => handleRemovePassing(index)}>Видалити</button>
                    </div>
                ))}
                <button onClick={handleAddPassing}>Додати Passing</button>
            </div>
            <div>
                <h6>Passing</h6>
                {service.prices.map((item, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={item}
                            onChange={(e) => handlePricesChange(index, e.target.value)}
                            placeholder={`Prices ${index + 1}`}
                        />
                        <button onClick={() => handleRemovePrices(index)}>Видалити</button>
                    </div>
                ))}
                <button onClick={handleAddPrices}>Додати Prices</button>
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
                        <button onClick={() => handleRemoveWarnings(index)}>Видалити</button>
                    </div>
                ))}
                <button onClick={handleAddWarnings}>Додати Warnings</button>
            </div>
        </div>
    )
}

export default AddServices;