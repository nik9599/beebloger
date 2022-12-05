import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar.js';
import Single from './pages/Singlepage.js'
import Write from './pages/Write.js'

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Write/>
    </div>
  );
}

export default App;
