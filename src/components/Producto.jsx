import React from 'react'
import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";
import Detalles from './Detalles';


function Producto({ id, title, price, category, thumbnail, comprar, detalles }) {
    const detalles2 = () => {
        console.log({ id })
    }
    return (
        <div className="product__card">
            <h3 className='card__titulo' >{title}</h3>
            <p className='card__precio'>Precio: ${price}</p>
            <p>{category}</p>
            <div className="card__img">
                <img src={thumbnail} alt="Imagen de producto..." />
            </div>
            <div className="button__container">
                <Button className='m-1' onClick={comprar} variant="info" >Comprar </Button>
                <Button className='m-1' variant="info" as={Link} to={`/producto/${id}`} >Ver Detalle </Button>
            </div>
            
        </div>
    )
}

export default Producto