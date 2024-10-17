const WISHLIST_KEY = 'wishlist';

// Get wishlist from localStorage
export const getWishlist = () => {
    const wishlist = localStorage.getItem(WISHLIST_KEY);
    return wishlist ? JSON.parse(wishlist) : [];
};

// Add a book to the wishlist
export const addBookToWishlist = (book) => {
    const wishlist = getWishlist();
    const updatedWishlist = [...wishlist, book];
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(updatedWishlist));
};

// Remove a book from the wishlist
export const removeBookFromWishlist = (bookId) => {
    const wishlist = getWishlist();
    const updatedWishlist = wishlist.filter((book) => book.id !== bookId);
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(updatedWishlist));
};

// Check if a book is in the wishlist
export const isBookInWishlist = (bookId) => {
    const wishlist = getWishlist();
    return wishlist.some((book) => book.id === bookId);
};
