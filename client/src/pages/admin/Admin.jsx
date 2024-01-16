import { Link } from "react-router-dom";
import Userfront, { LoginForm } from "@userfront/toolkit/react";
import "./admin.scss";

Userfront.init("9ny6xqrb");

const Admin = () => {
    return (
        <div className="admin">
                <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/admin/signup">Signup</Link>
                    </li>
                    <li>
                    <Link to="/admin/reset">Reset</Link>
                    </li>
                    <li>
                    <Link to="/admin/dashboard">Dashboard</Link>
                    </li>
                </ul>
                </nav>
                <LoginForm/>
                <button onClick={Userfront.logout}>Logout</button>
            </div>
    )
}



export default Admin