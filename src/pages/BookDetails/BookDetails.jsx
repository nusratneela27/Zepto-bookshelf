import { NavLink } from "react-router-dom";
import allBanner from "../../assets/allBanner.jpg";
import { useLoaderData } from "react-router-dom";
import Button from "../../components/Buttons/Button";

const BookDetails = () => {
  const book = useLoaderData();

  return (
    <div>
      <div
        className="relative w-full h-72 bg-cover"
        style={{ backgroundImage: `url(${allBanner})` }}
      >
        <div className="absolute inset-0 text-center bg-amber-50 bg-opacity-50 space-y-4">
          <h1 className="text-3xl md:text-5xl text-sky-800 font-bold mt-24">
            Book Details
          </h1>
          <div className="flex items-center justify-center text-black md:text-xl font-semibold">
            <NavLink to={"/"}>Home</NavLink>/<p>{book.title}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-10 border rounded-lg shadow-lg p-10 mt-20 mx-3 sm:mx-3 md:mx-3 lg:mx-96 lg">
        <div>
          <img src={book.formats["image/jpeg"]} alt={book.title} className="lg:h-96 lg:w-[550px] rounded-sm" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p>
            <span className="font-bold">Author Name :</span> {book.authors.map((author) => author.name).join(", ")}
          </p>
          <p><span className="font-bold">ID :</span> {book.id}</p>
          <p><span className="font-bold">Subjects :</span> {book.subjects}</p>
          <p><span className="font-bold">Languages :</span> {book.languages}</p>
          <p><span className="font-bold">Download :</span> {book.download_count}</p>
          <p><span className="font-bold">Media Type :</span> {book.media_type}</p>
          <p><span className="font-bold">Bookshelves :</span> {book.bookshelves}</p>
          <a
            href={book.formats["text/html"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button label={"Read Book"} customStyles="mt-7"></Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
