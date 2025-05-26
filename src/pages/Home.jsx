import HeroSection from './Components/HeroSection';
import CardSlider from "./Components/CardSlider";

const Home = () => {
  return (
    <>
     <section className="py-2 px-2 max-w-7xl mx-auto">
  <HeroSection />
</section>

{/* Replace the <hr> with gradient background div as explained before, with small margins */}
<div className="h-1 my-0 max-w-7xl mx-auto bg-amber-500 opacity-60 rounded-full"></div>

<section className="py-1 px-0 max-w-7xl mx-auto">
  <CardSlider />
</section>

    </>
  );
};

export default Home;
