import React, { useEffect, useState } from 'react'
import Producto from '../components/Producto';

const Productos = () => {
    const [productos, setProductos] = useState([])
    const [buscador, setBuscador] = useState('notebook')

    useEffect(
        () => {
            fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${buscador}`)
                .then(res => res.json())
                .then(data => setProductos(data?.results))
        }, [buscador])

    const handleComprar = (e) => {
        console.log("Producto vendido")
        console.dir(e.target)
        e.target.classList.add("vendido")
        e.target.innerHTML = 'Producto Vendido'
    };

    const handleDetalles = (e) => {
        console.log(`Esta viendo los detalles de un producto`)
        console.log(productos)

    };
    const handleBuscar = (e) => {
        setBuscador(e.target.value)
    }

    return (
        <>
            <div className="buscador">
                <label htmlFor="">Producto:</label>
                <input type="text" value={buscador} onChange={handleBuscar} />
            </div>

            <div className="product__container">

                {productos.map((prod) => (

                    <Producto
                        key={prod.id}
                        title={prod.title}
                        price={prod.price}
                        category={prod.category}
                        thumbnail={prod.thumbnail}
                        comprar={handleComprar}
                        detalles={handleDetalles}
                    />

                ))}

            </div>
        </>
    );
}

export default Productos