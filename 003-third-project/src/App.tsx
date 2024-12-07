import { Fragment, useState } from "react";
import Product from "./components/Product";
import "./App.css";

export interface IProduct {
  id: number;
  title: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      title: "Iphone",
      price: 3000,
    },
    {
      id: 2,
      title: "Samsung",
      price: 4000,
    },
  ]);

  function handleAddToCart(id: number) {
    console.log({ id });
  }

  return (
    <Fragment>
      {products.map((product) => (
        <Product
          product={product}
          handleAddToCartClick={handleAddToCart}
          key={product.id}
        />
      ))}
    </Fragment>
  );
}

export default App;
