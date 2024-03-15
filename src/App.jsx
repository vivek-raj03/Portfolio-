import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import About from './About';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" elementS={<About/>} />
      </Switch>
    </Router>
  );
}

export default App;
