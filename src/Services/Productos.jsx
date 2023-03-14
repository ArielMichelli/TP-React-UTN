import React, { useEffect, useState } from "react";
import Producto from "../components/Producto";
import Loading from "../components/Loading/Loading";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [buscador, setBuscador] = useState("notebook");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${buscador}`)
      .then((res) => res.json())
      .then((data) => setProductos(data?.results));
    setLoading(false);
  }, [buscador]);

  const handleComprar = (e) => {
    e.target.classList.add("vendido");
    e.target.innerHTML = "Producto añadido al carro";
  };

  const handleBuscar = (e) => {
    setBuscador(e.target.value);
  };

  return (
    <>
      <Loading loading={loading}>
        <div className="buscador">
          <label htmlFor="">Producto:</label>
          <input type="text" value={buscador} onChange={handleBuscar} />
        </div>

        <div className="product__container">
          {productos.map((prod) => (
            <Producto
              key={prod.id}
              id={prod.id}
              title={prod.title}
              price={prod.price}
              catalog_id={prod.catalog_product_id}
              thumbnail={prod.thumbnail}
              comprar={handleComprar}
            />
          ))}
        </div>
      </Loading>
    </>
  );
};

export default Productos;
