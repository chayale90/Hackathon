import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import FormPage from "./components/FormComponents/FormPage";
import LocationPage from "./components/LocationPage/LocationPage";
import RiskLevelPage from "./components/RiskLevelPage/RiskLevelPage";
function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/risk-level" element={<RiskLevelPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
