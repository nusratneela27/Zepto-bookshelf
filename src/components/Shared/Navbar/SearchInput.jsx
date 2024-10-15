import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { getAllBooks } from "../../../api/books";

const SearchInput = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllBooks().then((data) => {
      setBooks(data.results);
    });
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-sm">
      <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none">
        <BiSearch className="text-xl" />
      </button>

      <input
        type="search"
        placeholder="Search..."
        className="w-full py-2 pl-10 pr-5 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      {searchTerm &&
        filteredBooks.length > 0 && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              >
                <img
                  src={book.formats["image/jpeg"]}
                  alt={book.title}
                  className="w-10 h-10 mr-2 rounded"
                />
                <span className="text-gray-800">{book.title}</span>
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default SearchInput;
