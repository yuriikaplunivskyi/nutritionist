import useServiceData from '../../hooks/useServiceData';
import Accordions from "../accordion/Accordions";

const ChangeShowAllServices = () => {

    const { serviceData } = useServiceData();

return (
    <>
    {serviceData.map((item) => (
        <div className="service" key={item.id}>
            <div className="service-container" >
                <div className="service-textContainer">
                <h2 className="service-title">{item.title}</h2>
                {/* <img className="service-icon" src={selectedService.icon} alt={`"icon" ${selectedService.title}`} /> */}
                <p className="service-text">{item.descr}</p>
                <ol>
                    <span>Як проходить</span>
                    {item.passing.map((pass) => (
                    <li key={pass.id}>{pass.stage}</li>
                    ))}
                </ol>

                <ul>
                    <span className="service-price-title"> Вартість: </span>
                    {item.prices.map((price) => (
                    <li className="service-price" key={price.id}>{price.price}</li>
                    ))}
                </ul>
                </div>
                <Accordions data={item.warnings} />
                <span>{item.path}</span>
            </div>
        <button onClick={() => handleDelete(item.id)}>Видалити</button>
        <button>Змінити</button>
        </div>
    ))}
    </>
)
}

export default ChangeShowAllServices;