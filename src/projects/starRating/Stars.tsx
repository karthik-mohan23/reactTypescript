import { Star } from "lucide-react";
import { useState } from "react";

function Stars({ noOfStars = 5 }: { noOfStars: number }) {
  const [isActiveOnHover, setIsActiveOnHover] = useState(0);
  const [rating, setRating] = useState(0);

  return (
    <div className="flex">
      {Array.from({ length: noOfStars }, (v, i) => {
        return (
          <Star
            key={i}
            className={`${
              (isActiveOnHover || rating) >= i + 1 ? "text-yellow-400" : ""
            }`}
            onClick={() => setRating(i + 1)}
            onMouseEnter={() => setIsActiveOnHover(i + 1)}
            onMouseLeave={() => setIsActiveOnHover(0)}
          />
        );
      })}
    </div>
  );
}
export default Stars;
