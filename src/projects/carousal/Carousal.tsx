import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

type ImageData = {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
};

function Carousal() {
  const [imagesCollection, setImagesCollection] = useState<
    ImageData[] | null[]
  >([]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function getImages() {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=5"
      );
      const data = await response.json();
      console.log(data);
      setImagesCollection(data);
    }

    getImages();
  }, []);

  if (imagesCollection.length === 0) {
    return <h1>Loading....</h1>;
  }

  const carousalImage = imagesCollection[activeIndex];

  const handleNext = () => {
    let newIndex = activeIndex + 1;
    if (newIndex > imagesCollection.length - 1) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  const handlePrev = () => {
    let newIndex = activeIndex - 1;
    if (newIndex < 0) {
      newIndex = imagesCollection.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <section className="max-w-5xl mx-auto w-[90%]">
      <div className="min-h-screen flex justify-center items-center flex-col">
        <div className="max-w-xl relative">
          <img src={carousalImage?.download_url} alt="carousal image" />
          <PrevBtn handlePrev={handlePrev} />
          <NextBtn handleNext={handleNext} />
        </div>
      </div>
    </section>
  );
}
export default Carousal;

function PrevBtn({ handlePrev }: { handlePrev: () => void }) {
  return (
    <div className="absolute hover:bg-gradient-to-r from-gray-900 to-gray-600/10 duration-300 left-0 top-0 h-full flex items-center">
      <ChevronLeft
        className="text-white hover:cursor-pointer"
        onClick={handlePrev}
      />
    </div>
  );
}
function NextBtn({ handleNext }: { handleNext: () => void }) {
  return (
    <div className="absolute hover:bg-gradient-to-l from-gray-900 to-gray-600/10 duration-300 right-0 top-0 h-full flex items-center">
      <ChevronRight
        className="text-white hover:cursor-pointer"
        onClick={handleNext}
      />
    </div>
  );
}
