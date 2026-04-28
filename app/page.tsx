"use client";

import ProductCard from "@/components/ProductCard";
import products from "@/data/products";

export default function Home() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gray-100 px-8 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Discover Latest Trends
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Shop premium products with modern style.
        </p>

        <a
          href="/products"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Shop Now
        </a>
      </section>

      {/* Products */}
      <section className="px-8 py-14">
        <h2 className="text-3xl font-bold mb-8">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <footer className="bg-black text-white text-center py-6">
        <p>© 2026 ShopEase. All rights reserved.</p>
      </footer>
    </>
  );
}