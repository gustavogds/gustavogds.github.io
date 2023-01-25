import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Skills } from './pages/skills/Skills';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="App-body">
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/home" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
