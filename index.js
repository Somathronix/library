let library = [];

// Добавление книги
function addBook(title, author, yearPublished, genre, pageCount) {
  const book = { title, author, yearPublished, genre, pageCount };
  library.push(book);
}

// Удаление книги по названию
function removeBook(title) {
  library = library.filter(book => book.title !== title);
}

// Поиск книг по автору
function findBooksByAuthor(author) {
  return library.filter(book => book.author === author);
}

// Фильтрация по жанру
function filterBooksByGenre(genre) {
  return library.filter(book => book.genre === genre);
}

// Генерация отчета о количестве книг каждого жанра
function genreReport() {
  const report = {};
  library.forEach(book => {
    if (report[book.genre]) {
      report[book.genre]++;
    } else {
      report[book.genre] = 1;
    }
  });
  return report;
}

// Генерация отчета по среднему количеству страниц
function averagePagesReport() {
  const totalPages = library.reduce((total, book) => total + book.pageCount, 0);
  return totalPages / library.length;
}

// Вывод списка всех книг, отсортированный по году издания (от новых к старым)
function listBooksByYear() {
  return library.sort((a, b) => b.yearPublished - a.yearPublished);
}
