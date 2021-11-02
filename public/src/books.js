function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const notReturned = books.filter((book) => !book.borrows[0].returned);
  const returned = books.filter((book) => book.borrows[0].returned);
  return [notReturned, returned];
}

function getBorrowersForBook(book, accounts) {
  const borrows = book.borrows;
  
  return borrows.map((borrow) => {
    const foundAccount = (accounts.find((account) => account.id === borrow.id));
    return { ...foundAccount, ...borrow };
  }).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
