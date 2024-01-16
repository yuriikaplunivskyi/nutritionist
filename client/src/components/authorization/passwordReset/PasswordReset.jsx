import  { PasswordResetForm } from "@userfront/toolkit/react";
import { Link } from "react-router-dom";

const PasswordReset = () => {
    return (
        <div className="form-admin">
            <PasswordResetForm/>
            <Link className="form-admin__back" to="/admin">Назад</Link>
        </div>
    )
}

export default PasswordReset