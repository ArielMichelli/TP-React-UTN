import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Container, Row } from "react-bootstrap";
import Loading from "./Loading/Loading";

const Detalles = () => {
  const { productoId } = useParams();
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      try {
        fetch(`https://api.mercadolibre.com/items/${productoId}`)
          .then((res) => res.json())
          .then((data) => setProducto(data));
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [productoId]);

  const handleComprar = () => {
    console.log(
      `Usted quiere comprar un... \nPRODUCTO: ${producto.title} \nPRECIO: $ ${producto.price}`
    );
  };
  return (
    <>
      <Loading loading={loading}>
        <Container>
          <Row className="justify-content-center mt-5">
            <Card
              bg="primary"
              style={{
                width: "20rem",
                border: "solid black 1px",
                boxShadow: "2px 2px 10px black",
              }}
              className="text-center text-white"
            >
              <Card.Img
                className="p-1"
                variant="top"
                src={producto.thumbnail}
              />
              <Card.Body>
                <Card.Title className="my-4">{producto.title}</Card.Title>
                <Card.Title className="my-4">
                  Precio:$  {producto.price}
                </Card.Title>
                <Card.Text>Condicion: {producto.condition}</Card.Text>
                <Card.Text>
                  Stock disponible: {producto.initial_quantity}
                </Card.Text>
                <Card.Text>{producto.warranty}</Card.Text>
                <Button variant="warning" onClick={handleComprar}>
                  Comprar
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Loading>
    </>
  );
};

export default Detalles;
