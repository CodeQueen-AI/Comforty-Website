import Image from "next/image";

interface Product {
  title: string;
  image: string;
}

export default function OurProduct() {
  const products: Product[] = [
    {
      title: "Wing Chair",
      image: "/5.jpg",
    },
    {
      title: "Wooden Chair",
      image: "/6.jpg",
    },
    {
      title: "Desk Chair",
      image: "/7.png",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex items-center gap-2 mb-8 ml-4">
        <div className="h-16 w-[14px] bg-[#00B5A5] rounded-full"></div>
        <h1 className="text-4xl font-extrabold text-[#1C1B1F] tracking-tight">
          Top Categories
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <div key={index} className="group relative rounded-lg bg-white overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.title}
                height={400}
                width={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white text-xl font-semibold block p-4">{product.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
