import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight, FaRegHeart, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
  const [isWishListed, setIsWishListed] = useState(false);
  // const navigate = useNavigate();

  const toggleWishList = () => {
    if (isWishListed) {
      toast.error(`${book.title} removed from Wishlist`);
    } else {
      toast.success(`${book.title} added to Wishlist`);
    }
    setIsWishListed(!isWishListed);
  };

  // const handleDetailsClick = () => {
  //   navigate(`/book/${book.id}`);
  // };

  return (
    <div className="flex flex-col items-center p-5 rounded-sm shadow-lg max-w-xs w-full">
      {/* Book Image with Hover Effect */}
      <div className="relative mb-4 group">
        <img
          src={book.formats["image/jpeg"]}
          alt={book.title}
          className="rounded-sm h-64 w-48 object-cover"
        />

        {/* Overlay with Framer Motion for smooth transition */}
        <motion.div
          className="absolute inset-0 bg-sky-600 bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, backgroundColor: "rgba(3, 169, 244, 0.6)" }}
          transition={{ duration: 0.5 }}
        >
          {/* Heart Icon with Framer Motion animation */}
          <motion.div
            className="cursor-pointer me-5"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={toggleWishList}
          >
            {isWishListed ? (
              <FaHeart size={40} className="text-white" />
            ) : (
              <FaRegHeart size={40} className="text-white" />
            )}
          </motion.div>

          {/* Arrow Icon with Framer Motion */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            // onClick={handleDetailsClick}
          >
            <NavLink to={`/book/${book.id}`}>
              <FaArrowRight
                size={40}
                className="text-white border-2 rounded-full p-1 cursor-pointer"
              />
            </NavLink>
          </motion.div>
        </motion.div>
      </div>

      {/* Book Title */}
      <h2
        className="text-xl font-bold mb-2 w-full text-center overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer hover:text-sky-600"
        title={book.title}
      >
        {book.title}
      </h2>

      {/* Book Author */}
      <p
        // className="text-gray-600 mb-2 text-center"
        className="text-gray-600 mb-2 w-full text-center overflow-hidden whitespace-nowrap text-ellipsis"
      >
        by {book.authors.map((author) => author.name).join(", ")}
      </p>

      {/* Book ID */}
      <p className="text-gray-500">ID: {book.id}</p>
    </div>
  );
};

export default BookCard;
