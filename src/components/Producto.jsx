import React from 'react'


function Producto({ title, price, category, thumbnail, comprar, detalles }) {
    return (
        <div className="product__card">
            <h3>{title}</h3>
            <p>Precio: ${price}</p>
            <p>{category}</p>
            <div className="card__img">
                <img src={thumbnail} alt="Imagen de producto..." />
            </div>
            <div className="button__container">
                <button onClick={comprar} className='card__btn'>Comprar</button>
                <button onClick={detalles} className='card__btn'>Detalles</button>
            </div>
            <div id='detalle'>  

            </div>
        </div>
    )
}

export default Producto