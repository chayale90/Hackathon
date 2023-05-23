import "./App.css";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="main">
      <Header />

      <AppRoutes />
    </div>
  );
}

export default App;
