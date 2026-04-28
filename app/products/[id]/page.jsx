"use client";

import { use } from "react";
import Navbar from "@/components/Navbar";
import products from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetails({ params }) {
  const { id } = use(params)
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) return <h1>Product Not Found</h1>;

  return (
    <>

      <section className="px-8 py-10 grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md rounded-xl"
        />

        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl mt-4">₹{product.price}</p>

          <button
            onClick={() => addToCart(product)}
            className="mt-8 bg-black text-white px-6 py-3 rounded-lg"
          >
            Add To Cart
          </button>
        </div>
      </section>
    </>
  );
}