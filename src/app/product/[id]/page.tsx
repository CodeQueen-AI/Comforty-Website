"use client";
import { useState, useEffect } from "react";
import { useCart } from "../../context/cartcontext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaCheckCircle, FaRegHeart, FaHeart } from "react-icons/fa";
import { useParams } from "next/navigation"; 

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
}

const products: Product[] = [
  { id: 1, title: "Library Stool Chair", price: 20, image: "/1.jpg" },
  { id: 2, title: "Library Stool Chair", price: 20, image: "/2.jpg" },
  { id: 3, title: "Library Stool Chair", price: 20, image: "/3.jpg" },
  { id: 4, title: "Library Stool Chair", price: 20, image: "/4.jpg" },
  { id: 5, title: "Library Stool Chair", price: 20, image: "/5.jpg" },
  { id: 6, title: "Library Stool Chair", price: 20, image: "/6.jpg" },
  { id: 7, title: "Library Stool Chair", price: 20, image: "/7.png" },
  { id: 8, title: "Library Stool Chair", price: 20, image: "/8.jpg" },
  { id: 9, title: "Library Stool Chair", price: 20, image: "/9.jpg" },
  { id: 10, title: "Library Stool Chair", price: 20, image: "/10.jpg" },
  { id: 11, title: "Library Stool Chair", price: 20, image: "/11.jpg" },
  { id: 12, title: "Library Stool Chair", price: 20, image: "/12.jpg" },
];

export default function ProductDetail() {
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [notification, setNotification] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<boolean>(false);
  const router = useRouter();
  const { id } = useParams(); 

  useEffect(() => {
    if (id) {
      const productId = parseInt(Array.isArray(id) ? id[0] : id); 
      const foundProduct = products.find((p) => p.id === productId);

      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        router.push("/404");
      }
    }
  }, [id, router]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, name: product.title, quantity });
      setNotification(`${product.title} added to cart!`);
      setTimeout(() => setNotification(null), 3000);
    }
  };

  const toggleWishlist = () => {
    setWishlist(!wishlist);
  };

  if (!product) {
    return (
      <p className="text-center py-8 text-gray-600">Loading product details...</p>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gray-50">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="object-cover max-w-full"
          />
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center md:text-left font-serif mb-4">
            {product.title}
          </h1>

          <fieldset className="border border-gray-300 rounded-xl px-6 py-4 shadow-sm mb-6">
            <legend className="text-sm text-gray-500 px-2 font-semibold">
              PRICE
            </legend>
            <span className="text-2xl sm:text-3xl font-bold text-gray-800">
              Rs.{product.price}
            </span>
          </fieldset>

          <fieldset className="border border-gray-300 rounded-xl px-6 py-4 shadow-sm mb-6">
            <legend className="text-sm text-gray-500 px-2 font-semibold">COLORS</legend>
            <div className="flex space-x-2">
              <button className="border-2 w-10 h-10 focus:outline-none hover:bg-red-600" style={{ backgroundColor: '#F87171' }}></button>
              <button className="border-2 w-10 h-10 focus:outline-none hover:bg-orange-600" style={{ backgroundColor: '#F59E0B' }}></button>
              <button className="border-2 w-10 h-10 focus:outline-none hover:bg-green-600" style={{ backgroundColor: '#10B981' }}></button>
              <button className="border-2 w-10 h-10 focus:outline-none hover:bg-pink-600" style={{ backgroundColor: '#D1007F' }}></button>
              <button className="border-2 w-10 h-10 focus:outline-none hover:bg-blue-600" style={{ backgroundColor: '#3B82F6' }}></button>
            </div>
          </fieldset>

          <fieldset className="border border-gray-300 rounded-xl px-6 py-4 shadow-sm mb-6">
            <legend className="text-sm text-gray-500 px-2 font-semibold">
              QUANTITY
            </legend>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  className="w-8 h-8 flex items-center justify-center border border-gray-400 text-gray-700 rounded-md hover:bg-gray-200"
                  onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-12 h-8 text-center border-none focus:outline-none"
                  min="1"
                />
                <button
                  className="w-8 h-8 flex items-center justify-center border border-gray-400 text-gray-700 rounded-md hover:bg-gray-200"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <button onClick={toggleWishlist} className="text-2xl">
                {wishlist ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-gray-400" />
                )}
              </button>
            </div>
          </fieldset>

          <button
            onClick={handleAddToCart}
            className="w-full bg-[#00B5A5] text-white border border-white py-2 mt-6 shadow-lg transition hover:bg-white hover:text-[#00B5A5] hover:border-[#00B5A5]"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {notification && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-[#00B5A5] text-white py-2 px-6 rounded-lg shadow-lg">
          <FaCheckCircle className="inline mr-2" />
          {notification}
        </div>
      )}
    </div>
  );
}
