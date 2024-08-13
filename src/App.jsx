// React Router imports
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// Page imports
import Home from './pages/Home'
import Count from './pages/Count'
import RockPaperScissors from './pages/RockPaperScissors'

// Component Import
import NavBar from './components/NavBar'

// Bootstrap css import
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Count" element={<Count />} />
        <Route path="/RockPaperScissors" element={<RockPaperScissors />} />
      </Routes>
    </Router>
  )
}

export default App
