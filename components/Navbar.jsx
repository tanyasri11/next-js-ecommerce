"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-black">
        ShopEase
      </h1>

      <div className="flex gap-6 text-lg font-medium">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}