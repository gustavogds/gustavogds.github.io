import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Project from "./pages/projects/Project";
import ProjectStudentMS from "./pages/projects/ProjectStudentMS";
import ProjectSolaruIdle from "./pages/projects/ProjectSolaruIdle";
import ProjectOrfeuTunes from "./pages/projects/ProjectOrfeuTunes";
import About from "./pages/about/About";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Navbar />
        <div className="App-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:project" element={<Project />} />
            <Route path="/projects/student-ms-project" element={<ProjectStudentMS />} />
            <Route path="/projects/solaru-idle-project" element={<ProjectSolaruIdle />} />
            <Route path="/projects/orfeu-tunes-project" element={<ProjectOrfeuTunes />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
