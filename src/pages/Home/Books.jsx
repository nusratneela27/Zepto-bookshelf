import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import BookCard from "../../components/Cards/BookCard";
import { motion, AnimatePresence } from "framer-motion";
import { BiSearch } from "react-icons/bi";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchBooks = async (page) => {
      const res = await fetch(`https://gutendex.com/books?page=${page}`);
      const data = await res.json();
      setBooks(data.results);

      // Set total pages based on the total number of results
      setTotalPages(Math.ceil(data.count / data.results.length));

      // Extract genres/topics from the book data
      const allGenres = new Set();
      data.results.forEach((book) => {
        book.subjects?.forEach((subject) => {
          allGenres.add(subject);
        });
      });
      setGenres([...allGenres]);
    };

    fetchBooks(currentPage);
  }, [currentPage]);

  // Filter books by selected genre and search term
  const filteredBooks = books.filter((book) => {
    const matchesGenre = selectedGenre ? book.subjects?.includes(selectedGenre) : true;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGenre && matchesSearch;
  });

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

  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center mt-20 gap-3">
        <h1 className="text-xl md:text-5xl text-gray-800 font-bold text-center">
          Books
        </h1>
        <div className="flex gap-4">
          <div className="relative w-full max-w-sm">
            <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none">
              <BiSearch className="text-xl" />
            </button>

            <input
              type="search"
              placeholder="Search by title..."
              className="w-full py-2 pl-10 pr-5 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            />
          </div>
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
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mt-20">
        <AnimatePresence>
          {filteredBooks.map((book) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }} // Shortened transition duration for real-time feedback
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-5 mt-10">
        <button
          className="p-2 bg-sky-600 text-white rounded"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="p-2 bg-sky-600 text-white rounded"
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
