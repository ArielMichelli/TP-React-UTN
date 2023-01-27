import React from 'react'


function Producto({ title, price, category, thumbnail, comprar }) {
    return (
        <div className="product__card">
            <h2>{title}</h2>
            <h3>Precio: ${price}</h3>
            <p>{category}</p>
            <div className="card__img">
                <img src={thumbnail} alt="Imagen de producto..." />
            </div>
            <button onClick={comprar} className='card__btn'>Comprar</button>
        </div>
    )
}

export default Producto