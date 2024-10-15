import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import BookCard from "../../components/Cards/BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://gutendex.com/books")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBooks(data.results);
      });
  }, []);

  return (
    <Container>
      <h1 className="text-5xl text-gray-800 font-bold text-center mt-20">
        Books Bestsellers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-20">
        {books.map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </Container>
  );
};

export default Books;
