import Image from "next/image";

export default function HotProduct() {
  return (
    <header className="container mx-auto px-4 py-12 lg:py-16">
      <div className="relative flex flex-col md:flex-row items-center gap-8">
        <div className="text-3xl font-medium tracking-wider text-zinc-900 text-center md:text-left md:writing-mode-vertical md:absolute md:left-[-250px] md:top-[50%] md:transform md:-translate-y-1/2 md:-rotate-90">
          EXPLORE NEW AND POPULAR STYLES
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 w-full md:ml-[50px]">
          <div className="w-full md:w-[48%] flex justify-center">
            <Image
              src="/3.jpg"
              alt="img"
              className="h-full w-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="grid grid-cols-2 gap-6 w-full md:w-[60%] lg:w-[48%]">
            <div className="aspect-square w-full flex justify-center">
              <Image
                src="/4.jpg"
                alt="img"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square w-full flex justify-center">
              <Image
                src="/1.jpg"
                alt="img"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square w-full flex justify-center">
              <Image
                src="/8.jpg"
                alt="img"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square w-full flex justify-center">
              <Image
                src="/6.jpg"
                alt="img"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
