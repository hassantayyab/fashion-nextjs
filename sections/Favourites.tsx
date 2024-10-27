import { Card } from '@/components';
import { CardData } from '@/models';
import Fashion1 from '@/public/fashion-1.jpg';
import Fashion2 from '@/public/fashion-2.jpg';
import NewArrivalTitleImg from '@/public/new-arrival-title.svg';
import Image from 'next/image';

const FAVOURITES: CardData[] = [
  { name: 'Trending on instagram', image: Fashion1 },
  { name: 'All Under $40', image: Fashion2 },
];

export default function Favourites() {
  const favourites = FAVOURITES;

  return (
    <div className="container-fs">
      <div className="relative mb-16 inline-block">
        <h3 className="relative z-10 uppercase">New Arrivals</h3>
        <Image
          className="absolute -bottom-1 -right-2"
          src={NewArrivalTitleImg}
          alt="new-arrival-title"
          width={132}
        />
      </div>

      <ul className="grid grid-cols-2 gap-16">
        {favourites.map((favourite) => (
          <Card key={favourite.name} {...favourite} />
        ))}
      </ul>
    </div>
  );
}
