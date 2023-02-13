
import Productos from './Services/Productos'
import Home from './pages/Home';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Firebase from './Services/Firebase'; 

//Routes:
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';


function App() {

  console.log(Firebase)

  return (

    <div className="App">
      
      <Router>
        <nav className="navbar">
          <div className="navbar__der">
            <Link to="/">Home</Link>
            <Link to="/productos">Productos</Link>
          </div>
          <div className="navbar__izq">
            <Link to="/login">Login</Link>
            <Link to="/registro">Registro</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes >
      </Router >

    </div>

  )
}

export default App
