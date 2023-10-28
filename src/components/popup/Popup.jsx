import Accordions from "../accordion/Accordions";
import "./popup.scss";

const Popup = ({onClose}) => {
    return (
        <div className="popup-container">
            <div className="popup">
                <h2>Popup content</h2>
                <p>This is some popup content.</p>
                <Accordions/>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default Popup;