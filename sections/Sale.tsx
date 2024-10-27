import { Button } from '@/components';
import SaleImg from '@/public/sale.png';
import Star from '@/public/star.png';
import Image from 'next/image';

export default function Sale() {
  return (
    <div className="container-fs">
      <div className="rounded-fs flex items-center gap-40 bg-gradient-to-r from-yellow-main to-yellow-light px-60 py-12">
        <div className="relative flex-1">
          <Image
            className="absolute -left-12 top-24 opacity-60"
            src={Star}
            alt="hero"
            width={48}
          />
          <Image
            className="absolute right-32 top-36 opacity-60"
            src={Star}
            alt="hero"
            width={48}
          />
          <Image
            className="absolute left-4 top-96 opacity-60"
            src={Star}
            alt="hero"
            width={48}
          />
          <Image
            className="absolute bottom-52 right-28 opacity-60"
            src={Star}
            alt="hero"
            width={48}
          />
          <Image src={SaleImg} alt="sale" width={260} />
        </div>
        <div className="flex-1">
          <h1 className="uppercase">
            <span className="before:bg-red-fs relative inline-block text-gray-100 before:absolute before:-inset-y-0 before:-left-4 before:-right-6 before:block before:-skew-y-2 before:skew-x-2">
              <span className="relative">Payday</span>
            </span>
            <br /> Sale Now
          </h1>
          <p className="mr-8">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
          <p className="mt-6 font-black">1 June - 10 June 2021</p>
          <p className="font-normal">*Terms & Conditions apply</p>
          <Button className="hover:bg-red-fs mt-6">Shop Now</Button>
        </div>
      </div>
    </div>
  );
}
