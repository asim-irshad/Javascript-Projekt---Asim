/**
 * OBJECTS
 */
let books = {
  book1: '1984',
  book2: 'Faust',
  book3: 'Fantastic Mr. Fox'
};

// add a new book to the books object
// using dot notation


console.log('Print full array' , books);

books.book4='Fourth Book';
console.log('Print full array with book 4' , books);
// using square bracket notation

books["book5"]='Fifth book';

console.log('\n\nPrint full array with book 5' , books);


// remove an book from the books object
delete books.book1;
console.log('\n\nPrint full array without book1' , books);

// log the third book
console.log('\n\nBook3 name is ', books.book3)

// iterate over the books and log every single one
console.log('\n\nLIST OF BOOKS   -');
for (x in books) {
  console.log(books[x]);
}

/**
 * ARRAYS
 */
let movies = ['Pulp Fiction', 'Inception', 'Call me by your name', 'Batman'];

// add a new movie to the array

movies.push('This is new movie');
console.log('\n\nMOVIE LIST   -\n', movies);

// remove the book „Call me by your name“ from the books object
movies.splice(2);
console.log('\n\nMOVIE LIST   -\n', movies);

// log the first movie
console.log('\n\n FIRST MOVIE IS   -',movies[0]);

// iterate over the movies and log every single one 

console.log('\n\nLIST OF MOVIES   -');
for (x in movies) {
  console.log(movies[x]); 
}
