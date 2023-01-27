import React, { useEffect, useState } from 'react'

const Productos = () => {
    const [productos, setProductos] = useState([])

    useEffect(
        () => {
            fetch('https://api.escuelajs.co/api/v1/products')
                .then(res => res.json())
                .then(data => setProductos(data))
        }, [])

    return (
        <div className="contenedor">
            {
                
                productos.map(prod => {
                    return(
                       
                        <div className="prod__card" key={prod.id}>
                            <p className="card__name">{prod.title}</p>
                            <p className="card__price">{prod.price}</p>
                            <img src={prod.images[0]} alt="" className="card__img" />
                        </div>
                     
                        
                    )
                })
            }
        </div>
    )
}

export default Productos