import  {SignupForm,} from "@userfront/toolkit/react";
import { Link } from "react-router-dom";

const Signup = () => {

    return (
        <div className="form-admin">
            <SignupForm />
            <Link className="form-admin__back" to="/admin">Назад</Link>
        </div>
    )
}



export default Signup;