import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight, FaRegHeart, FaHeart } from "react-icons/fa";

const BookCard = ({ book }) => {
  const [isWishListed, setIsWishListed] = useState(false);

  const toggleWishList = () => {
    if (isWishListed) {
      toast.error(`${book.title} removed from Wishlist`);
    } else {
      toast.success(`${book.title} added to Wishlist`);
    }
    setIsWishListed(!isWishListed);

    // setIsWishListed(!isWishListed);
    // console.log(isWishListed ? "removed" : "add");
  };

  return (
    <div className="flex flex-col items-center p-5 rounded-sm shadow-lg">
      {/* Book Image with Hover Effect */}
      <div className="relative w-full h-96 mb-4 group">
        <img
          src={book.formats["image/jpeg"]}
          alt={book.title}
          className="w-full h-full rounded-sm"
        />

        {/* Overlay shown on hover */}
        <div className="absolute inset-0 bg-sky-600 bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          {/* heart toggled */}
          <div onClick={toggleWishList} className="cursor-pointer me-5">
            {isWishListed ? (
              <FaHeart size={50} className=" text-white  " />
            ) : (
              <FaRegHeart size={50} className=" text-white  " />
            )}
          </div>

          {/* arrow read more */}
          <a
            href={book.formats["text/html"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaArrowRight
              size={50}
              className=" text-white border-4 rounded-full p-2 cursor-pointer"
            />
          </a>
        </div>
      </div>

      {/* Book Title */}
      <h2
        className="text-2xl font-bold mb-2 w-full text-center overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer hover:text-sky-600"
        title={book.title}
      >
        {book.title}
      </h2>

      {/* Book Author */}
      <p className="text-gray-600 mb-2 text-center">
        by {book.authors.map((author) => author.name).join(", ")}
      </p>

      {/* Book ID */}
      <p className="text-gray-500">ID: {book.id}</p>
    </div>
  );
};

export default BookCard;
