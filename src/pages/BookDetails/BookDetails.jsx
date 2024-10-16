import React from "react";
import { useLoaderData } from "react-router-dom"; // Import useLoaderData

const BookDetails = () => {
  const book = useLoaderData(); // Get book details from loader

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center mb-5">{book.title}</h1>
      <div className="flex justify-center mb-10">
        <img
          src={book.formats["image/jpeg"]}
          alt={book.title}
          className="h-80"
        />
      </div>
      <p className="text-center text-lg mb-5">
        by {book.authors.map((author) => author.name).join(", ")}
      </p>
      <p className="text-center text-gray-600 mb-5">ID: {book.id}</p>
      <p className="text-justify mx-10">
        {book.description || "No description available."}
      </p>
    </div>
  );
};

export default BookDetails;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const BookDetails = () => {
//   const { id } = useParams(); // Get the book id from the URL
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true); // Add a loading state
//   const [error, setError] = useState(null); // Add error state

//   useEffect(() => {
//     // Fetch book details by id
//     const fetchBookDetails = async () => {
//       try {
//         const res = await fetch(`https://gutendex.com/books?ids=${id}`);
//         const data = await res.json();

//         // Check if the book exists
//         if (data.results && data.results.length > 0) {
//           setBook(data.results[0]); // Set the first book from the response
//         } else {
//           setError("Book not found");
//         }
//       } catch (err) {
//         setError("Failed to fetch book details");
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchBookDetails();
//   }, [id]);

//   // Show loading state while fetching
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   // Show error if the book is not found or if there is a problem with fetching
//   if (error) {
//     return <p>{error}</p>;
//   }

//   // Render book details
//   return (
//     <div className="container mx-auto mt-10">
//       <h1 className="text-4xl font-bold text-center mb-5">{book.title}</h1>
//       <div className="flex justify-center mb-10">
//         <img
//           src={book.formats["image/jpeg"]}
//           alt={book.title}
//           className="h-80"
//         />
//       </div>
//       <p className="text-center text-lg mb-5">
//         by {book.authors.map((author) => author.name).join(", ")}
//       </p>
//       <p className="text-center text-gray-600 mb-5">ID: {book.id}</p>
//       <p className="text-justify mx-10">
//         {book.description || "No description available."}
//       </p>
//     </div>
//   );
// };

// export default BookDetails;
