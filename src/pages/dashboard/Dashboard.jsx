import Loader from "../../components/loader/Loader";
import  {lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import Userfront from "@userfront/toolkit/react";
import AddServices from "../../components/dashboard/addServices/AddServices";
import ChangeShowAllServices from "../../components/dashboard/changeShowAllServices/changeShowAllServices";
export const LazyNavbar = lazy(() => import("../../components/navbar/Navbar"));

import "./dashboard.scss";
import AddCertificateForm from "../../components/dashboard/addCertificateForm/AddCertificateForm";
import ChangeShowAllCertificate from "../../components/dashboard/changeShowAllCertificate/ChangeShowAllCertificate";

const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState('');
    return (
        <div className="dashboard">
            <Suspense fallback={<div className="loader-container"><Loader/></div>}>
            <LazyNavbar/>

            <div className="dashboard_nav">
                <Link className="btn" to="/">Повернутися на головну</Link>
                <Link className="btn" to="/admin/reset">Скидування паролю</Link>
                <Link className="btn" to="/admin/signup">Зареєструватися</Link>
                <button className="btn" onClick={Userfront.logout}>Вийти з аккаунту</button>
            </div>
            
            <div className="dashboard__window">
                <div className="dashboard_tabs">
                    <button className="btn" onClick={() => setActiveTab('changeServices')}>Змінити доступні послуги</button>
                    <button className="btn" onClick={() => setActiveTab('addServices')}>Додати нову послугу</button>
                    <button className="btn" onClick={() => setActiveTab('changeCertificate')}>Змінити доступні сертифікати</button>
                    <button className="btn" onClick={() => setActiveTab('addCertificate')}>Додати новий сертифікат</button>
                </div>

                <div className="dashboard__content">
                    {activeTab === 'changeServices' && <ChangeShowAllServices/>}
                    {activeTab === 'changeCertificate' && <ChangeShowAllCertificate/>}
                    {activeTab === 'addServices' && <AddServices/>}
                    {activeTab === 'addCertificate' && <AddCertificateForm/>}
                </div>
            </div>
            </Suspense>
        </div>
    )
}

export default DashboardPage;