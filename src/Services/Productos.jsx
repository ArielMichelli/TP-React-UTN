import React, { useEffect, useState } from 'react'
import Producto from '../components/Producto';

const Productos = () => {
    const [productos, setProductos] = useState([])

    useEffect(
        () => {
            fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod")
                .then(res => res.json())
                .then(data => setProductos(data?.results))
            
        }, [])

        const handleComprar = (e) => {
            console.log("Producto vendido")
            console.dir(e.target)
            e.target.classList.add("vendido")
            e.target.innerHTML = 'Producto Vendido'
          };
        

    return (
        <div className="product__container">
            
            {productos.map((prod) => (
                
                <Producto
                    key={prod.id}
                    title={prod.title}
                    price={prod.price}
                    category={prod.category}
                    thumbnail={prod.thumbnail}
                    comprar={handleComprar}
                />
               
            ))}

        </div>
    );
}

export default Productos