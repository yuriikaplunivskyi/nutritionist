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

    const handleRemoveWa = (index) => {
        const updatedWa = [...service.warnings];
        updatedWarnings.splice(index, 1);
        setService({ ...service, warnings: updatedWa });
    };

    const handleWarningsChange = (index, value) => {
        const updatedWarnings = [...service.warnings];
        updatedWarnings[index] = value;
        setService({ ...service, warnings: updatedPrices });
    };

    const handleAddWarnings = () => {
        setService({ ...service, warnings: [...service.warnings, ""] });
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
            <input type="image" name="icon" placeholder="Назва послуги"/>
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
                <h6>Passing</h6>
                {service.warnings.map((item, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={item}
                            onChange={(e) => handleWarningsChange(index, e.target.value)}
                            placeholder={`Warnings ${index + 1}`}
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