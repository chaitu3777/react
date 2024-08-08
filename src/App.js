import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Row>
        <Router>
          <Col sm={2} className='Col1'><Header/></Col>
          <Col sm={10} className='Col2'>
          <Routes>
          <Route path='/react'exact Component={Home}/>
          <Route path='/about'exact Component={About}/>
          <Route path='/services'exact Component={Services}/>
          <Route path='/contact'exact Component={Contact}/>
          </Routes>
          </Col>
        </Router>
      </Row>
    </div>
  );
}

export default App;