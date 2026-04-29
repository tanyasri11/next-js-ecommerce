"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart, totalPrice } =
    useCart();

  return (
    <>
      <section className="px-8 py-10">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-lg mb-4 flex justify-between items-center"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-52 object-cover rounded-lg"
                  />
                  <h2 className="font-bold">{item.name}</h2>
                  <p>₹{item.price}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}

            <h2 className="text-2xl font-bold mt-8">Total: ₹{totalPrice}</h2>
            <Link
              href="/checkout"
              className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-lg"
            >
              Proceed to Checkout
            </Link>
          </>
        )}
      </section>
    </>
  );
}
