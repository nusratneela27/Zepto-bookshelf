// get all books
export const getAllBooks = async (page, query = "", genre = "") => {
    const res = await fetch(
        `https://gutendex.com/books?page=${page}&search=${query}`
    );
    const data = await res.json()
    return data
}
