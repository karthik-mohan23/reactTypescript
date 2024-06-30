import { useState } from "react";

const tabsDetails = [
  {
    id: 1,
    title: "Tabs 1",
    content: "This is content 1",
  },
  {
    id: 2,
    title: "Tabs 2",
    content: "This is content 2",
  },
  {
    id: 3,
    title: "Tabs 3",
    content: "This is content 3",
  },
];

function Tabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { content: tabsContent } = tabsDetails[activeIndex];

  return (
    <div className="max-w-lg   mx-auto ">
      <div className="pt-28 flex flex-col items-center justify-center gap-4">
        <div className="   flex  items-center border border-green-400">
          {tabsDetails.map(({ id, title }, index) => (
            <h3
              key={id}
              onClick={() => setActiveIndex(index)}
              className={` ${
                activeIndex === index && "bg-gray-800 text-white"
              }  border border-gray-500 px-4 py-2 cursor-pointer`}>
              {title}
            </h3>
          ))}
        </div>

        <p className="text-center pt-4">{tabsContent}</p>
      </div>
    </div>
  );
}
export default Tabs;
