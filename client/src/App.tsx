import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import WelcomePage from "./component/WelcomePage/WelcomePage";
function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
