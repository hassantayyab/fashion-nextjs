import { Button } from '@/components';
import HeroImg from '@/public/hero.png';
import Star from '@/public/star.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="container-fs">
      <div className="rounded-fs flex items-start justify-between gap-8 bg-gray-100 px-24">
        <div className="space-y-4 py-18">
          <h1>
            <span className="relative inline-block before:absolute before:-inset-y-0 before:-left-6 before:-right-32 before:block before:-skew-y-2 before:skew-x-2 before:bg-white">
              <span className="relative">LET’S</span>
            </span>
            <br />
            EXPLORE
            <br />
            <span className="relative inline-block before:absolute before:-inset-y-0 before:-left-6 before:-right-24 before:block before:-skew-y-2 before:skew-x-2 before:bg-yellow-light">
              <span className="relative">UNIQUE</span>
            </span>
            <br />
            CLOTHES.
          </h1>
          <p className="py-6">
            Your place to get inspired by the latest fashion trends
          </p>
          <Button className="hover:bg-yellow-light hover:text-gray-950">
            Explore
          </Button>
        </div>

        <div className="relative h-full">
          <Image
            className="absolute left-0 top-24"
            src={Star}
            alt="hero"
            width={48}
          />
          <Image
            className="absolute right-12 top-32"
            src={Star}
            alt="hero"
            width={48}
          />
          <Image
            className="absolute left-24 top-96"
            src={Star}
            alt="hero"
            width={48}
          />
          <Image
            className="absolute bottom-32 left-4"
            src={Star}
            alt="hero"
            width={48}
          />
          <Image
            className="absolute bottom-64 right-24"
            src={Star}
            alt="hero"
            width={48}
          />
          <Image className="mr-32" src={HeroImg} alt="hero" width={464} />
        </div>
      </div>
    </div>
  );
}
