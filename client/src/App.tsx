import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import FormPage from "./components/FormComponents/FormPage";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route index element={<WelcomePage />} />
          <Route path="/formPage" element={<FormPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
