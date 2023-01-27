
import Productos from './Services/Productos'
import Footer from './layout/Footer'
import Header from './layout/Header'


function App() {

  return (
    <div className="App">
      <Header />
      <h1 className='titulo'>Lista de Productos:</h1>
      <div className="product__container">
        <Productos />
      </div>
      <Footer />
    </div>
  )
}

export default App
