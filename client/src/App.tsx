import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import EnterPage from "./component/EnterPage/EnterPage";
import Form from "./component/Form/form";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route index element={<EnterPage />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
