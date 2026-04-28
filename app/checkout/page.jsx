"use client";

import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart, totalPrice } = useCart();

  const handleOrder = () => {
    alert("Order Placed Successfully!");
  };

  return (
    <>

      <section className="px-8 py-10 grid md:grid-cols-2 gap-10">
        
        {/* Shipping Form */}
        <div>
          <h1 className="text-3xl font-bold mb-6">
            Checkout
          </h1>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="Address"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="City"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="Postal Code"
              className="w-full border p-3 rounded-lg"
            />
          </form>
        </div>

        {/* Order Summary */}
        <div className="border rounded-2xl p-6 shadow-md h-fit">
          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between mb-4"
                >
                  <span>
                    {item.name} x {item.qty}
                  </span>

                  <span>
                    ₹{item.price * item.qty}
                  </span>
                </div>
              ))}

              <hr className="my-4" />

              <h3 className="text-xl font-bold mb-6">
                Total: ₹{totalPrice}
              </h3>

              <button
                onClick={handleOrder}
                className="w-full bg-black text-white py-3 rounded-lg"
              >
                Place Order
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
}