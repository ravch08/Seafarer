import { Link } from "react-router-dom";

const MidBanner = () => {
  return (
    <section
      aria-labelledby="Section Banner"
      className="my-12 flex h-[400px] items-center bg-midBanner-01 bg-center"
    >
      <div className="container mx-auto w-2/3 text-center">
        <h2 className="font-h2 text-white">DISCOVER NEW YACHTS</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam
          odio quasi earum, animi cupiditate natus nemo adipisci eos optio rem
          deserunt nisi tenetur fugiat iste praesentium voluptatem voluptatum
          vitae!
        </p>
        <Link to="tours" className="btn-primary">
          VIEW MORE
        </Link>
      </div>
    </section>
  );
};

export default MidBanner;
