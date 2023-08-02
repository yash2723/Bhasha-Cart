import { mens_kurta } from '../../../data/men/mens_kurta';
import Carousel from '../../components/Carousel/Carousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';

function Home() {
  return (
    <div>
      <Carousel />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 bg-purple-50">
        <HomeSectionCarousel data={mens_kurta} sectionName="Men's Kurta" />
        <HomeSectionCarousel data={mens_kurta} sectionName="Men's Shoes" />
        <HomeSectionCarousel data={mens_kurta} sectionName="Men's Shirt" />
      </div>
    </div>
  );
}

export default Home;
