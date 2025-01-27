import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import Newsletter from './Newsletter'

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
};

export default function AllProduct() {
  const products: Product[] = [
    {id: 1, title: "Library Stool Chair", price: 20, image: "/1.jpg", isNew: true},
    {id: 2, title: "Library Stool Chair", price: 20, image: "/2.jpg"},
    {id: 3, title: "Library Stool Chair", price: 20, image: "/3.jpg" },
    {id: 4, title: "Library Stool Chair", price: 20, image: "/4.jpg" },
    {id: 5, title: "Library Stool Chair", price: 20, image: "/5.jpg", isNew: true},
    {id: 6, title: "Library Stool Chair", price: 20, isSale: true, image: "/6.jpg",},
    {id: 7, title: "Library Stool Chair", price: 20, image: "/7.png" },
    {id: 8, title: "Library Stool Chair", price: 20, image: "/8.jpg" },
    {id: 9, title: "Library Stool Chair", price: 20, image: "/9.jpg", isNew: true},
    {id: 10, title: "Library Stool Chair", price: 20, image: "/10.jpg", isSale: true},
    { id: 11, title: "Library Stool Chair", price: 20, image: "/11.jpg" },
    { id: 12, title: "Library Stool Chair", price: 20, image: "/12.jpg" },
  ];

const ProductCard = ({ product }: { product: Product }) => (
  <div key={product.id} className="group relative rounded-lg bg-white">
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
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          height={400}
          width={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          aria-label={`View details of ${product.title}`}
        />
      </Link>
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
      <button
        className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-white hover:text-[#00B5A5] duration-300"
        aria-label={`Add ${product.title} to cart`}>
        <FiShoppingCart className="h-5 w-5" />
      </button>
    </div>
  </div>
);
  return (
    <div className="container mx-auto px-4 py-20">
       <div className="flex items-center gap-2 mb-8 ml-4">
      <div className="h-16 w-[14px] bg-[#00B5A5] rounded-full"></div>
      <h1 className="text-4xl font-extrabold text-[#1C1B1F] tracking-tight">
       All Products
      </h1>
    </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Newsletter/>
    </div>
  );
}