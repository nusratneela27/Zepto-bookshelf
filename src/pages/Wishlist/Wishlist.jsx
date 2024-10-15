import { NavLink } from "react-router-dom";
import allBanner from "../../assets/allBanner.jpg";

const Wishlist = () => {
  return (
    <div
      className="relative w-full h-72 bg-cover"
      style={{ backgroundImage: `url(${allBanner})` }}
    >
      <div className="absolute inset-0 text-center bg-amber-50 bg-opacity-50 space-y-4">
        <h1 className="text-3xl md:text-5xl text-sky-800 font-bold mt-24">
          wishlist
        </h1>
        <div className="flex items-center justify-center text-black md:text-xl font-semibold">
          <NavLink to={"/"}>Home</NavLink>/<p>wishlist</p>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
