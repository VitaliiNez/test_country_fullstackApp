import "./App.css";
import { Outlet } from "react-router";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
