import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
