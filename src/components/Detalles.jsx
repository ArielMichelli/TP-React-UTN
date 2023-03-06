import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Button, Container, Row } from 'react-bootstrap';
import Loading from './Loading/Loading';

const Detalles = () => {
    const { productoId } = useParams();
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const request = async () => {
            try {
                fetch(`https://api.mercadolibre.com/items/${productoId}`)
                    .then(res => res.json())
                    .then(data => setProducto(data))
                setLoading(false)
            } catch (e) {
                console.log(e);
            }
        };
        request();
    }, [productoId]);


    return (
        <>
            <Loading loading={loading} >
                <Container>
                    <Row className="justify-content-center mt-5">
                        <Card bg='info' style={{ width: '20rem' }} className="text-center">
                            <Card.Img variant="top" src={producto.thumbnail} />
                            <Card.Body>
                                <Card.Title>{producto.title}</Card.Title>
                                <Card.Title>Precio: ${producto.price}</Card.Title>
                                <Card.Text>Condicion: {producto.condition}</Card.Text>
                                <Card.Text>Cantidad: {producto.initial_quantity}</Card.Text>
                                <Card.Text>{producto.warranty}</Card.Text>
                                <Button variant="warning">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </Loading>
        </>
    );
}

export default Detalles