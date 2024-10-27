import { Button } from '@/components';

export default function Subscribe() {
  return (
    <div className="bg-yellow-light">
      <div className="container-fs">
        <div className="mx-auto max-w-2xl py-32 text-center">
          <div>
            <h3 className="">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h3>
            <p className="mb-8 mt-2 text-base font-normal">
              Type your email down below and be young wild generation
            </p>
          </div>
          <div className="relative mx-auto h-14 max-w-sm">
            <input
              type="text"
              placeholder="Enter your email here"
              className="absolute inset-0 rounded-xl bg-white p-4 pr-32 text-base font-medium text-gray-950 outline-none placeholder:text-gray-400"
            />
            <Button className="absolute inset-y-1.5 right-1.5 sm:px-6 sm:py-1.5">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
