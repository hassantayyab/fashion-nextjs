import { CardData } from '@/models';
import Arrow from '@/public/arrow.svg';
import Image from 'next/image';

export default function Card(data: CardData) {
  return (
    <li key={data.name} className="group flex cursor-pointer flex-col gap-6">
      <div className="grow overflow-hidden rounded-2xl">
        <Image
          src={data.image}
          alt={data.name}
          className="h-full w-full object-cover transition-transform duration-300 ease-linear group-hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-between font-medium">
        <div>
          <h5 className="transition-fs mb-1 text-2xl ease-linear group-hover:text-[26px]">
            {data.name}
          </h5>
          <p className="text-base text-gray-500">Explore Now!</p>
        </div>
        <Image
          src={Arrow}
          alt="arrow"
          width={24}
          className="transition-fs relative right-0 inline-block group-hover:-right-2"
        />
      </div>
    </li>
  );
}
