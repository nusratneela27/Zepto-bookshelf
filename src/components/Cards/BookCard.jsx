import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight, FaRegHeart, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const BookCard = ({ book }) => {
  const [isWishListed, setIsWishListed] = useState(false);

  const toggleWishList = () => {
    if (isWishListed) {
      toast.error(`${book.title} removed from Wishlist`);
    } else {
      toast.success(`${book.title} added to Wishlist`);
    }
    setIsWishListed(!isWishListed);
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

        {/* Overlay with Framer Motion for smooth transition */}
        <motion.div
          className="absolute inset-0 bg-sky-600 bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, backgroundColor: "rgba(3, 169, 244, 0.6)" }} // sky-600 with opacity
          transition={{ duration: 0.5 }}
        >
          {/* Heart Icon with Framer Motion animation */}
          <motion.div
            className="cursor-pointer me-5"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y:  0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={toggleWishList}
          >
            {isWishListed ? (
              <FaHeart size={50} className=" text-white" />
            ) : (
              <FaRegHeart size={50} className=" text-white" />
            )}
          </motion.div>

          {/* Arrow Icon with Framer Motion */}
          <motion.a
            href={book.formats["text/html"]}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          >
            <FaArrowRight
              size={50}
              className=" text-white border-4 rounded-full p-2 cursor-pointer"
            />
          </motion.a>
        </motion.div>
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
