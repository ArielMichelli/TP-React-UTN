
import Productos from './Services/Productos'
import Home from './pages/Home';
import Login from './pages/Login';
import Registro from './pages/Registro';
import NavBarPro from './components/NavBar';
import Detalles from './components/Detalles';

//Firebase
import firebase from './Config/firebase';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Routes:
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//Provider:
import AuthProvider from './Context/AuthContext';


function App() {

  return (

    <div className="App">
      <>
      <AuthProvider>
        <BrowserRouter>
          <NavBarPro />
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/producto/:productoId" element={<Detalles />} />
            
            {/* <Route path='*' element={<Navigate replace to="/" />} /> */}
          </Routes >
        </BrowserRouter>
        </AuthProvider>
      </>

    </div>

  )
}

export default App
