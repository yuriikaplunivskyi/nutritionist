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
                    <Link to="/">Головна</Link>
                    </li>
                    <li>
                    <Link to="/admin/dashboard">Адмін-панель</Link>
                    </li>
                    <li>
                    <Link to="/admin/reset">Відновити пароль</Link>
                    </li>
                </ul>
                </nav>
                <LoginForm/>
            </div>
    )
}



export default Admin