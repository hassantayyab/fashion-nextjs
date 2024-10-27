import AndroidApp from '@/public/download-android.png';
import IosApp from '@/public/download-ios.svg';
import MobileAppImg from '@/public/mobile-app.png';
import Image from 'next/image';

export default function MobileApp() {
  return (
    <div className="container-fs">
      <div className="grid grid-cols-2 gap-16">
        <div className="mx-36 flex flex-col justify-center gap-4">
          <h2>DOWNLOAD APP & GET THE VOUCHER!</h2>
          <p className="mb-6 mt-2 text-base text-gray-500">
            Get 30% off for first transaction using Rondovision mobile app for
            now.
          </p>
          <div className="mr-16 flex gap-4">
            <Image
              className="min-w-0 flex-1"
              src={IosApp}
              alt="download ios app"
            />
            <Image
              className="min-w-0 flex-1"
              src={AndroidApp}
              alt="download android app"
            />
          </div>
        </div>
        <div className="mx-20">
          <Image src={MobileAppImg} alt="mobile app" />
        </div>
      </div>
    </div>
  );
}
