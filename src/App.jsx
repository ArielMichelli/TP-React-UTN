
import Productos from './Services/Productos'
import Home from './pages/Home';
import Login from './pages/Login';
import Registro from './pages/Registro';
import NavBarPro from './components/NavBar';

//Firebase
import firebase from './Config/firebase';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Routes:
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



function App() {

  return (

    <div className="App">
      <>

        <BrowserRouter>
          <NavBarPro />

          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path='*' element={<Navigate replace to="/" />} />
          </Routes >
        </BrowserRouter>
      </>
    </div>

  )
}

export default App
