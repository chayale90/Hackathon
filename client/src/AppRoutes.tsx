import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//for toast container you need the container will be in app and his css
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import WelcomePage from "./components/WelcomePage/WelcomePage";
import FormPage from "./components/FormComponents/FormPage";
import LocationPage from "./components/LocationPage/LocationPage";
import RiskLevelPage from './components/RiskLevelPage/RiskLevelPage';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/location" element={<LocationPage />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/riskLevel" element={<RiskLevelPage />} />
            </Routes>
            <ToastContainer position="top-left" theme="colored" />
        </Router>
    );
};

export default AppRoutes;
