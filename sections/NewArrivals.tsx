import { Card } from '@/components';
import { CardData } from '@/models';
import NewArrival1 from '@/public/new-arrival-1.jpg';
import NewArrival2 from '@/public/new-arrival-2.jpg';
import NewArrival3 from '@/public/new-arrival-3.jpg';
import NewArrivalTitleImg from '@/public/new-arrival-title.svg';
import Image from 'next/image';

const NEW_ARRIVALS: CardData[] = [
  { name: 'Hoodies & Sweetshirt', image: NewArrival1 },
  { name: 'Coats & Parkas', image: NewArrival3 },
  { name: 'Tees & T-Shirt', image: NewArrival2 },
];

export default function NewArrivals() {
  const newArrivals = NEW_ARRIVALS;

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

      <ul className="grid grid-cols-3 gap-16">
        {newArrivals.map((newArrival) => (
          <Card key={newArrival.name} {...newArrival} />
        ))}
      </ul>
    </div>
  );
}
