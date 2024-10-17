# Live Site 
[Bookshelf](https://faster-ui-task.netlify.app/)


# Book Library App

This is a **React.js** application that fetches book data from the [GutenDex API](https://gutendex.com/) and displays it in a user-friendly interface. The application includes search and filter functionalities, pagination, and a wishlist feature that allows users to save their favorite books using localStorage.

## Features

### 1. **Books Listing**
   - The homepage displays a list of books fetched from the GutenDex API.
   - Each book card shows the **title**, **author**, **cover image**, **genre**, and **book ID**.

### 2. **Search Bar**
   - A real-time search bar allows users to filter the books by title.

### 3. **Genre Filter**
   - A dropdown filter allows users to filter the books based on their genre or topic.

### 4. **Wishlist Functionality**
   - Users can click on a heart icon to add or remove a book from their wishlist.
   - Wishlisted books are stored in **localStorage** and persist across sessions.
   - The wishlist page displays all wishlisted books with the ability to remove them.

### 5. **Pagination**
   - The book list is paginated for easier navigation.
   - Users can switch between pages using a pagination bar (e.g., "Next", "Previous", and numbered pages).

### 6. **Book Details**
   - Each book card links to a detailed page where more information about the book is displayed.

## Pages

### 1. **Home Page**
   - Displays the list of books with a search bar, genre filter, and pagination.
   
### 2. **Book Details Page**
   - Shows more details about a specific book including the title, author, and other information.

### 3. **Wishlist Page**
   - Displays all books that the user has added to their wishlist.
