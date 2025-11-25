import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import InputComment from "./components/InputComment";
import YoutubeComments from "./components/YoutubeComments";
import GroupInfo from "./components/GroupInfo";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<InputComment />} />
            <Route path="/youtube" element={<YoutubeComments />} />
            <Route path="/group" element={<GroupInfo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
