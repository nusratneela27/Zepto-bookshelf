import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaArrowRight, FaRegHeart, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  addBookToWishlist,
  isBookInWishlist,
  removeBookFromWishlist,
} from "../../utils/localStorageUtils";

const BookCard = ({ book, onRemoveFromWishlist }) => {
  const [isWishListed, setIsWishListed] = useState(false);

  useEffect(() => {
    setIsWishListed(isBookInWishlist(book.id));
  }, [book.id]);

  const toggleWishList = () => {
    if (isWishListed) {
      removeBookFromWishlist(book.id);
      toast.error(`${book.title} removed from Wishlist`);
      onRemoveFromWishlist && onRemoveFromWishlist();
    } else {
      addBookToWishlist(book);
      toast.success(`${book.title} added to Wishlist`);
    }
    setIsWishListed(!isWishListed);
  };

  return (
    <div
      className={`flex flex-col items-center p-2 md:p-5 rounded-sm shadow-lg max-w-xs w-full ${
        isWishListed ? "bg-sky-200" : ""
      }`}
    >
      {/* Book Image with Hover Effect */}
      <div className="relative mb-4 group">
        <img
          src={book.formats["image/jpeg"]}
          alt={book.title}
          className="rounded-sm h-36 md:h-64 md:w-48 object-cover"
        />

        {/* Overlay for desktop view */}
        <motion.div
          className="hidden md:flex absolute inset-0 bg-sky-600 bg-opacity-60 opacity-0 group-hover:opacity-100 items-center justify-center transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, backgroundColor: "rgba(3, 169, 244, 0.6)" }}
          transition={{ duration: 0.5 }}
        >
          {/* Heart Icon */}
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

          {/* Arrow Icon */}
          <NavLink to={`/book/${book.id}`}>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <FaArrowRight
                size={40}
                className="text-white border-2 rounded-full p-1"
              />
            </motion.div>
          </NavLink>
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
      <p className="text-gray-600 mb-2 w-full text-center overflow-hidden whitespace-nowrap text-ellipsis">
        by {book.authors.map((author) => author.name).join(", ")}
      </p>

      {/* Book ID */}
      <p className="text-gray-500 mb-2">ID: {book.id}</p>

      {/* Mobile view buttons */}
      <div className="md:hidden flex justify-between space-x-4 mb-2">
        <div onClick={toggleWishList}>
          {isWishListed ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
        </div>

        <NavLink to={`/book/${book.id}`}>
          <FaArrowRight
            size={20}
            className="border-2 border-black rounded-full p-1"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default BookCard;
