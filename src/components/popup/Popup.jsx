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
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <span className="popup-price">{item.price}</span>
                <Accordions/>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default Popup;