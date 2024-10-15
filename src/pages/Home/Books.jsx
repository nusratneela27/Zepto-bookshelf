import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import BookCard from "../../components/Cards/BookCard";
import { motion, AnimatePresence } from "framer-motion";
import { getAllBooks } from "../../api/books";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 4;

  useEffect(() => {
    getAllBooks().then((data) => {
      setBooks(data.results);
    });
  }, []);

  // Calculate the current books to be displayed
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(books.length / booksPerPage);

  return (
    <Container>
      <div className="flex justify-between items-center mt-20">
        <h1 className="text-5xl text-gray-800 font-bold text-center ">
          Books Bestsellers
        </h1>
        <div className="flex gap-4">
          <p>dropdown filter by genre</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-20">
        <AnimatePresence>
          {currentBooks.map((book) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-10 space-x-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 ${
                currentPage === number
                  ? "bg-sky-600 text-white"
                  : "bg-gray-300 hover:bg-gray-400"
              } rounded`}
            >
              {number}
            </button>
          )
        )}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Next
        </button>
      </div>
    </Container>
  );
};

export default Books;
