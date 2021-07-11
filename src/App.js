import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home"


function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="context">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
