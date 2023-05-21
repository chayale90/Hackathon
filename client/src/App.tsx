import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import WelcomePage from "./component/WelcomePage/WelcomePage";
import FormPage from "./component/FormComponents/FormPage";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route index element={<WelcomePage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
