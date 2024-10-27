import AdidasLogo from '@/public/adidas.png';
import HAndMLogo from '@/public/h&m.png';
import HollisterLogo from '@/public/hollister.png';
import LacosteLogo from '@/public/lacoste.png';
import LevisLogo from '@/public/levis.png';
import PullAndBearLogo from '@/public/pull&bear.png';
import ZaraLogo from '@/public/zara.png';
import Image, { StaticImageData } from 'next/image';

type Brand = {
  name: string;
  logo: StaticImageData;
};

const BRANDS: Brand[] = [
  { name: 'h&m', logo: HAndMLogo },
  { name: 'zara', logo: ZaraLogo },
  { name: 'adidas', logo: AdidasLogo },
  { name: 'lacoste', logo: LacosteLogo },
  { name: 'levis', logo: LevisLogo },
  { name: 'hollister', logo: HollisterLogo },
  { name: 'pull&bear', logo: PullAndBearLogo },
];
export default function Brands() {
  const brands = BRANDS;

  return (
    <div className="bg-yellow-light py-12">
      <div className="container-fs">
        <ul className="flex items-center justify-evenly gap-4">
          {brands.map((brand) => (
            <li key={brand.name}>
              <Image src={brand.logo} alt={brand.name} width={120} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
