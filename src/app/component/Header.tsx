'use client';
import { FaShoppingCart, FaRegUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  const handleUserClick = () => {
    router.push('/signup'); 
  };

  return (
    <div className="w-full bg-[#F0F2F3] pt-[20px] pb-[20px] h-[84px]">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={30}
            height={17}
            className="ml-3 sm:w-[30px] sm:h-[17px] lg:w-[40px] lg:h-[23px]"
          />
          <h2 className="text-[20px] font-medium sm:text-[18px] lg:text-[26px]">Comforty</h2>
        </div>
        <div className="flex items-center space-x-4">
          {/* Cart Button */}
          <Link href="/cart">
            <button className="flex items-center bg-white p-2 rounded-full">
              <FaShoppingCart className="text-xl" />
            </button>
          </Link>

          {/* User Icon */}
          <button onClick={handleUserClick} className="text-xl bg-white p-2 rounded-full">
            <FaRegUserCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
