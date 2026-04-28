"use client";

import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";

export default function ProductsPage() {
  return (
    <>
      <section className="px-8 py-10">
        <h1 className="text-3xl font-bold mb-8">All Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
