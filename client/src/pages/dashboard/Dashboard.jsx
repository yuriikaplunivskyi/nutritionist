import Loader from "../../components/loader/Loader";
import  {lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import Userfront from "@userfront/toolkit/react";
import AddServices from "../../components/dashboard/addServices/AddServices";
import ChangeShowAllServices from "../../components/dashboard/changeShowAllServices/changeShowAllServices";
export const LazyNavbar = lazy(() => import("../../components/navbar/Navbar"));

import "./dashboard.scss";

const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState('');
    return (
        <div className="dashboard">
            <Suspense fallback={<div className="loader-container"><Loader/></div>}>
            <LazyNavbar/>

            <div className="dashboard_navWrapper">
                <Link className="btn" to="/">Повернутися на головну</Link>
                <Link className="btn" to="/admin/reset">Скидування паролю</Link>
                <Link className="btn" to="/admin/signup">Зареєструватися</Link>
                <button className="btn" onClick={Userfront.logout}>Вийти з аккаунту</button>
            </div>
            
            <div className="dashboard_tabWrapper">
                <button className="btn" onClick={() => setActiveTab('changeServices')}>Змінити доступні послуги</button>
                <button className="btn" onClick={() => setActiveTab('addServices')}>Додати нові послуги</button>
            </div>

            {activeTab === 'changeServices' && <ChangeShowAllServices/>}
            {activeTab === 'addServices' && <AddServices/>}
            
            </Suspense>
        </div>
    )
}

export default DashboardPage;