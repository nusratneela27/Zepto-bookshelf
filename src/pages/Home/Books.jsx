import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import BookCard from "../../components/Cards/BookCard";
import { motion, AnimatePresence } from "framer-motion";
import { BiSearch } from "react-icons/bi";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    const fetchBooks = async (page, query = "", genre = "") => {
      const res = await fetch(
        `https://gutendex.com/books?page=${page}&search=${query}`
      );
      const data = await res.json();
      setBooks(
        genre
          ? data.results.filter((book) => book.subjects.includes(genre))
          : data.results
      );

      // Set total pages based on the total number of results
      setTotalPages(Math.ceil(data.count / data.results.length));

      const allGenres = data.results.flatMap((book) => book.subjects);
      setGenres([...new Set(allGenres)]);
    };

    fetchBooks(currentPage, debouncedSearchTerm, selectedGenre);
  }, [currentPage, debouncedSearchTerm, selectedGenre]);

  // Pagination Controls
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Debounce effect for the search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setCurrentPage(1);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle genre selection change
  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    setCurrentPage(1);
  };

  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center mt-20 gap-3">
        <h1 className="text-xl md:text-5xl text-sky-600 font-bold text-center">
          Books
        </h1>
        <div className="flex gap-4">
          {/* Search books */}
          <div className="relative w-full max-w-sm">
            <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none">
              <BiSearch className="text-xl" />
            </button>

            <input
              type="search"
              placeholder="Search by title..."
              className="w-full py-2 pl-10 pr-5 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          {/* Genre Dropdown Filter */}
          <select
            className="p-3 text-sm rounded-lg bg-sky-600 text-white w-1/2 md:w-auto"
            value={selectedGenre}
            onChange={handleGenreChange}
          >
            <option value="">Filter All Genres</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Book List */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-20">
        <AnimatePresence>
          {books.map((book) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-5 mt-10">
        <button
          className={`p-2 rounded ${
            currentPage === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-sky-600 text-white"
          }`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`p-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-sky-600 text-white"
          }`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </Container>
  );
};

export default Books;
