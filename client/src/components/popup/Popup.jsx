import Accordions from "../accordion/Accordions";
import "./popup.scss";

const Popup = ({onClose, item}) => {

    const handleBackgroundClick = e => {
        if (e.target.classList.contains("popup-container")) {
            onClose()
        } 
    }

    return (
        <div className="popup-container" onClick={handleBackgroundClick}>
            <div className="popup">
                <div className="popup-textContainer">
                    <h2 className="popup-title">{item.title}</h2>
                    <p className="popup-text">{item.content}</p>
                    <ol> <span>Як проходить</span>
                    {item.passing.length ? item.passing.map(item =>(
                        <li key={item.id}>{item.option}</li>
                    )): console.log("error data accordions")}
                    </ol>
                    {item.prices.length ? item.prices.map(item =>(
                        <span className="popup-price" key={item.id}>Вартість: <span>{item.price}</span></span>
                    )): console.log("error data accordions")}
                </div>
                <Accordions data={item.warnings}/>
                <button 
                    className="popup-btn_close"
                    onClick={onClose}
                    >Close</button>
            </div>
        </div>
    )
}

export default Popup;