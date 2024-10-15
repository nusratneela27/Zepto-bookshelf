// get all books
export const getAllBooks = async (page) => {
    const response = await fetch(`https://gutendex.com/books?page=${page}`)
    const data = await response.json()
    return data
}