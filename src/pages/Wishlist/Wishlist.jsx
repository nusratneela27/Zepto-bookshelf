import React, { useState, useEffect } from "react";
import allBanner from "../../assets/allBanner.jpg";
import { NavLink } from "react-router-dom";
import BookCard from "../../components/Cards/BookCard";
import Container from "../../components/Shared/Container";

const Wishlist = () => {
  const [wishlistBooks, setWishlistBooks] = useState([]);

  // Fetch wishlist books from local storage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistBooks(storedWishlist);
  }, []);

  // Function to remove a book from wishlist
  const removeFromWishlist = (bookId) => {
    const updatedWishlist = wishlistBooks.filter((book) => book.id !== bookId);
    setWishlistBooks(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="wishlist-container">
      <div
        className="relative w-full h-72 bg-cover"
        style={{ backgroundImage: `url(${allBanner})` }}
      >
        <div className="absolute inset-0 text-center bg-amber-50 bg-opacity-50 space-y-4">
          <h1 className="text-3xl md:text-5xl text-sky-800 font-bold mt-24">
            Wishlist
          </h1>
          <div className="flex items-center justify-center text-black md:text-xl font-semibold">
            <NavLink to="/">Home</NavLink>/<p>Wishlist</p>
          </div>
        </div>
      </div>

      {/* Wishlist Items */}
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-20">
          {wishlistBooks.length > 0 ? (
            wishlistBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onRemoveFromWishlist={() => removeFromWishlist(book.id)}
              />
            ))
          ) : (
            <p className="text-center">Your wishlist is empty.</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Wishlist;
