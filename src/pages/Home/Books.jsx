import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import BookCard from "../../components/Cards/BookCard";
import { motion, AnimatePresence } from "framer-motion";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const booksPerPage = 4;

  useEffect(() => {
    fetch("https://gutendex.com/books")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setBooks(data.results);

        // Extract genres/topics from the book data
        const allGenres = new Set();
        data.results.forEach((book) => {
          book.subjects?.forEach((subject) => {
            allGenres.add(subject);
          });
        });
        setGenres([...allGenres]);
      });
  }, []);

  // Filter books by selected genre
  const filteredBooks = selectedGenre
    ? books.filter((book) => book.subjects?.includes(selectedGenre))
    : books;

  // Calculate the current books to be displayed
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center mt-20 gap-3">
        <h1 className="text-xl md:text-5xl text-gray-800 font-bold text-center">
          Books Bestsellers
        </h1>
        {/* Genre Dropdown Filter */}
        <select
          className="p-3 text-sm rounded bg-sky-600 text-white w-1/2 md:w-auto"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">Filter All Genres</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
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
      {/* Responsive Pagination Controls */}
      <div className="flex justify-center mt-10 space-x-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm bg-gray-300 rounded hover:bg-gray-400"
        >
          Previous
        </button>

        {/* Pagination Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm ${
                  currentPage === number
                    ? "bg-sky-600 text-white"
                    : "bg-gray-300 hover:bg-gray-400"
                } rounded`}
              >
                {number}
              </button>
            )
          )}
        </div>

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm bg-gray-300 rounded hover:bg-gray-400"
        >
          Next
        </button>
      </div>
    </Container>
  );
};

export default Books;
