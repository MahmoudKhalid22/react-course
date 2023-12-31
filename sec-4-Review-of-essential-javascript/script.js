"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBook = exports.getBooks = exports.data = void 0;
exports.data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];
function getBooks() {
    return exports.data;
}
exports.getBooks = getBooks;
function getBook(id) {
    return exports.data.find((d) => d.id === id);
}
exports.getBook = getBook;
const books = getBooks();
const book = getBook(2);
// const title = book?.title;
// const author = book?.author;
// Reading data from a book object like this can be a little bit cumbersome, especially when we have
// a lot of properties we want to take out so that we have destructring
// ---------
// DESTRUCTRING OBJECTS
// ---------
const { title, author, pages, publicationDate, genres, hasMovieAdaptation, } = book;
// console.log(genres);
// -------------------------------
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
// ---------
// DESTRUCTRING ARRAYS
// ---------
const [firstEl, secondEl, ...otherGenres] = genres;
// console.log(firstEl, secondEl, otherGenres);
// ---------
// SPREAD OPERTOR FOR ARRAYS
// ---------
const newGenre = [...genres, "epic fantasy"];
// console.log(newGenre);
// ---------
// SPREAD OPERATOR FOR OBJECTS
// ---------
const updateBook = Object.assign(Object.assign({}, book), { moviePublicationDate: "2022-2-2", pages: 2000 });
// you can add a new value to the updatedBook and override the old value also after spread operator
// of course the spread of the object needs to be first
// console.log(updateBook);
// ---------
// REST OPERATOR
// ---------
// Rest operator is an argument of a function (typeof array) to make the function take any number of args
// ---------
// TEMPLATE LITERALS
// ---------
const summary = `${title} is a book`;
// ---------
// TERNARIES INSTEAD OF IF/ELSE
// ---------
const numberOfPages = `the number of pages is ${pages > 1000 ? "over a thousand" : "below a thousand"}`;
// console.log(numberOfPages);
// ---------
// ARROW FUNCTION
// ---------
const test = (str) => str.split("_")[0];
// ---------
// SHORT CIRCUITING , LOGICAL OPERATORS; &&, ||
// ---------
const countWrong = ((_a = book === null || book === void 0 ? void 0 : book.reviews.librarything) === null || _a === void 0 ? void 0 : _a.reviewsCount) || "no data";
// I don't want 0 number but instead I want no data
const count = (_d = (_c = (_b = book === null || book === void 0 ? void 0 : book.reviews) === null || _b === void 0 ? void 0 : _b.librarything) === null || _c === void 0 ? void 0 : _c.reviewsCount) !== null && _d !== void 0 ? _d : "no data";
console.log("countWrong ", countWrong); // the output is 'no data'
console.log("count ", count); // the output is 0
// this nullish qualising operator return no data when the first is null or undefined but not 0
// ---------
// OPTOINAL CHAINING
// ---------
// typescript auto does it in brief
console.log((_f = (_e = book === null || book === void 0 ? void 0 : book.reviews) === null || _e === void 0 ? void 0 : _e.librarything) === null || _f === void 0 ? void 0 : _f.reviewsCount);
