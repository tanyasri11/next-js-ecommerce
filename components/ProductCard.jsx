import Link from "next/link";

export default function ProductCard({ item }) {
  return (
    <div className="border rounded-2xl p-4 shadow hover:shadow-xl hover:-translate-y-2 transition duration-300 bg-white">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-52 object-cover rounded-xl"
      />

      <h2 className="text-xl font-semibold mt-4">
        {item.name}
      </h2>

      <p className="text-gray-600 mt-1">
        ₹{item.price}
      </p>

      <Link href={`/products/${item.id}`}>
        <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
          View Product
        </button>
      </Link>
    </div>
  );
}