import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./views/Profile";
import Project from "./views/Project";
import Art from "./views/Art";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project" element={<Project />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
