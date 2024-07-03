import Stars from "./Stars";

function StarRating() {
  return (
    <div className="max-w-lg   mx-auto ">
      <div className="pt-28 flex flex-col items-center justify-center">
        <Stars noOfStars={5} />
      </div>
    </div>
  );
}
export default StarRating;
