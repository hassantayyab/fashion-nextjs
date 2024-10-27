import {
  Brands,
  Favourite,
  Footer,
  Hero,
  MobileApp,
  Navbar,
  NewArrivals,
  Sale,
  Subscribe,
} from '@/sections';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-between gap-28">
        <Hero />
        <Brands />
        <NewArrivals />
        <Sale />
        <Favourite />
        <MobileApp />
        <Subscribe />
      </div>
      <Footer />
    </>
  );
}
