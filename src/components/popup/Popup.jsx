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
                <h2 className="popup-title">{item.title}</h2>
                <p className="popup-text">{item.content}</p>
                <span className="popup-price">{item.price}</span>
                <Accordions  data={item.warnings}/>
                <button 
                    className="popup-btn_close"
                    onClick={onClose}
                    >Close</button>
            </div>
        </div>
    )
}

export default Popup;