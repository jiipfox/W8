import './App.css';
import MyContainer from './components/MyContainer.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/About.js';
import Header from './components/Header.js';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MyContainer />} />
        <Route path="/about" element={<About />} />      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
