import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Chatbar from "./chatbar/Chatbar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<h1>Hello</h1>} />
            <Route
              path="/rooms/:roomId"
              element={
                <>
                  <Chatbar />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
