function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
);
}

function getTotalNumberOfBorrows(account, books) {
  const patronId = account.id; 
  let count = 0; 
  
  function countPatronBooks(book) {
  
    const borrows = book.borrows;

    count = borrows.reduce((acc, borrow) => {
      if (borrow.id === patronId) {
        return acc + 1;
      }
      return acc;
    }, count);
  }

  books.forEach(countPatronBooks);
                
                

  return count;
}




function getBooksPossessedByAccount(account, books, authors) {
  const patronId = account.id; 
  const patronCheckedOutBooks = [];

  books.forEach((book) => {
    const borrows = book.borrows;

    const isCheckedOutByPatron = borrows.some((borrow) => borrow.id === patronId && !borrow.returned);
    if (!isCheckedOutByPatron) {
      return;
    }

    book.author = authors.find((author) => author.id === book.authorId);
    patronCheckedOutBooks.push(book);
  });

  //console.log(patronCheckedOutBooks);
  return patronCheckedOutBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
