import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import EnterPage from "./component/EnterPage/EnterPage";
function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route path="/" element={<EnterPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
