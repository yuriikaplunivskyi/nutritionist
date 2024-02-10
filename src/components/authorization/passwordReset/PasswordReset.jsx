import  { PasswordResetForm } from "@userfront/toolkit/react";
import { Link } from "react-router-dom";

const PasswordReset = () => {
    return (
        <div className="form-admin">
            <PasswordResetForm/>
            <Link className="form-admin__back" to="/admin/dashboard">Назад</Link>
        </div>
    )
}

export default PasswordReset