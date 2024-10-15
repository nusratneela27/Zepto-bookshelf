import banner from "../../assets/banner.webp";
import Button from "../../components/Buttons/Button";
import Container from "../../components/Shared/Container";

const Banner = () => {
  return (
    <div className="relative">
      <img src={banner} alt="banner" className="h-60 md:h-auto" />
      <Container>
        <div className="absolute top-1/4 md:space-y-6">
          <h2 className="md:text-4xl font-semibold italic">Year and Sale</h2>
          <h1 className="text-xl md:text-6xl text-sky-600 font-bold mb-2 w-2/3 md:w-1/2">
            Get 70% Off For All Design Books
          </h1>
          <p className="w-1/2 hidden md:block">
            Discover a wide range of books across genres. Don’t miss out on this
            limited-time offer! Available are amazing publishing and mockup
            design courses for beginners
          </p>
          <Button
            label={"Shop Now"}
            customStyles={"py-1 px-2 md:px-6 md:py-2"}
          ></Button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
