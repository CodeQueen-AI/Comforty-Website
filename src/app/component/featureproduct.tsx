import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";

interface Product {
  title: string;
  price: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

export default function OurProduct() {
  const products: Product[] = [
    {
      title: "Library Stool Chair",
      price: 20,
      image: "/1.jpg",
      isNew: true,
    },
    {
      title: "Library Stool Chair",
      price: 20,
      image: "/2.jpg",
      isSale: true,
    },
    {
      title: "Library Stool Chair",
      price: 20,
      image: "/3.jpg",
    },
    {
      title: "Library Stool Chair",
      price: 20,
      image: "/4.jpg",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
     <div className="flex items-center gap-2 mb-8 ml-4">
      <div className="h-16 w-[14px] bg-[#00B5A5] rounded-full"></div>
      <h1 className="text-4xl font-extrabold text-[#1C1B1F] tracking-tight">
       Feature Products
      </h1>
    </div>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <div key={index} className="group relative rounded-lg bg-white">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              {product.isNew && (
                <div className="absolute left-3 top-3 px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full hover:bg-emerald-600">
                  New
                </div>
              )}
              {product.isSale && (
                <div className="absolute left-3 top-3 px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full hover:bg-orange-600">
                  Sales
                </div>
              )}
                <Image
                  src={product.image}
                  alt={product.title}
                  height={400}
                  width={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-medium text-[#1C1B1F]">
                    ${product.price}
                  </span>
                </div>
              </div>
              <button className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-white hover:text-[#00B5A5] ">
                <FiShoppingCart  className="h-5 w-5" />
                <span className="sr-only">Add to cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
