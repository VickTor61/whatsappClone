import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import nochat from "./img/nochat_background.png";
import Sidebar from "./sidebar/Sidebar";
import Chatbar from "./chatbar/Chatbar";
import Login from "./Login";
import "./App.css";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <div className="app_body">
        {user ? (
          <Router>
            <Sidebar userImage={"fak"} />
            <Routes>
              <Route path="/" element={<img src={nochat} alt="no_chat" />} />
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
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
}

export default App;
