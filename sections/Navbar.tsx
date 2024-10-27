import Logo from '@/public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="container mx-auto flex items-center justify-between gap-4 px-4 py-8 uppercase">
      <Link href="/" className="flex items-center gap-3">
        <Image src={Logo} alt="logo" width={32} />
        <h3>Fashion</h3>
      </Link>
      <ul className="flex items-center gap-16 font-medium">
        <li className="transition-fs cursor-pointer text-gray-950 ease-in-out hover:text-yellow-light">
          Catalogue
        </li>
        <li className="transition-fs cursor-pointer text-gray-950 ease-in-out hover:text-yellow-light">
          Fashion
        </li>
        <li className="transition-fs cursor-pointer text-gray-950 ease-in-out hover:text-yellow-light">
          Favourite
        </li>
        <li className="transition-fs cursor-pointer text-gray-950 ease-in-out hover:text-yellow-light">
          Lifestyle
        </li>
      </ul>
    </nav>
  );
}
