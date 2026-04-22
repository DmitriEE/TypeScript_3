import fs from 'fs';
import { faker } from '@faker-js/faker';
const random = Math.random();
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const genres = ["fantasy", "science fiction", "mystery", "romance", "horror", "thriller", "historical", "non-fiction", "biography", "self-help"];
// Book adding and deleting functions -----------------------------------------------------------------------------------------
export function generate_book(genres, id = Math.round(Math.random() * 1000)) {
    let res = {
        "id": id,
        "title": faker.lorem.sentence(),
        "isbn": Number(Array.from({ length: 13 }, () => Math.floor(Math.random() * 10)).join('')),
        "publishedYear": randomInt(1900, 2026),
        "pageCount": randomInt(100, 1000),
        "language": faker.lorem.word(),
        "description": faker.lorem.paragraph(),
        "authorId": Math.round(Math.random() * 1000),
        "publisherId": Math.round(Math.random() * 1000),
        "genres": [faker.helpers.arrayElement(genres)],
        "createdAt": faker.date.past(),
        "updatedAt": faker.date.past()
    };
    try {
        let books = [];
        if (fs.existsSync("dist/data/books.json")) {
            const data = fs.readFileSync("dist/data/books.json", "utf-8");
            books = data ? JSON.parse(data) : [];
            if (!Array.isArray(books))
                books = [];
        }
        books.push(res);
        fs.writeFileSync("dist/data/books.json", JSON.stringify(books, null, 2), "utf8");
        console.log("Book added successfully");
        return "Book added successfully";
    }
    catch (error) {
        console.error("Error writing JSON file:", error);
        return "Error";
    }
}
// generate_book(genres);
export function delete_book(id) {
    const data = fs.readFileSync("dist/data/books.json", "utf-8");
    const books = JSON.parse(data);
    const updatedBooks = books.filter((book) => book.id !== id);
    if (updatedBooks.length === books.length) {
        console.log("Book with id " + id + " not found.");
        return "Book with id " + id + " not found.";
    }
    fs.writeFileSync("dist/data/books.json", JSON.stringify(updatedBooks, null, 2));
    console.log("Book with id " + id + " deleted.");
    return "Book with id " + id + " deleted.";
}
//delete_book(317);
//Author adding and deleting functions---------------------------------------------------------------------------------------------------------------------
function generate_author() {
    let res = {
        id: Math.round(Math.random() * 1000),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        birthYear: randomInt(1900, 2026),
        nationality: faker.location.country(),
        biography: faker.lorem.paragraph(),
        createdAt: faker.date.past()
    };
    try {
        let authors = [];
        if (fs.existsSync("dist/data/authors.json")) {
            const data = fs.readFileSync("dist/data/authors.json", "utf-8");
            authors = data ? JSON.parse(data) : [];
            if (!Array.isArray(authors))
                authors = [];
        }
        authors.push(res);
        fs.writeFileSync("dist/data/authors.json", JSON.stringify(authors, null, 2), "utf8");
        console.log("Author added successfully");
    }
    catch (error) {
        console.error("Error writing JSON file:", error);
    }
}
//generate_author();
export function delete_author(id) {
    const data = fs.readFileSync("dist/data/authors.json", "utf-8");
    const authors = JSON.parse(data);
    const updatedAuthors = authors.filter((author) => author.id !== id);
    if (updatedAuthors.length === authors.length) {
        console.log("Author with id " + id + " not found.");
        return "Author with id " + id + " not found.";
    }
    fs.writeFileSync("dist/data/authors.json", JSON.stringify(updatedAuthors, null, 2));
    console.log("Author with id " + id + " deleted.");
    return "Author with id " + id + " deleted.";
}
//delete_author(430);
//Genre adding function------------------------------------------------------------------------------------
//const genres = ["fantasy", "science fiction", "mystery", "romance", "horror", "thriller", "historical", "non-fiction", "biography", "self-help"];
function generate_genre(int, genres) {
    let res = {
        id: int,
        name: genres[int]
    };
    try {
        let genres = [];
        if (fs.existsSync("dist/data/genres.json")) {
            const data = fs.readFileSync("dist/data/genres.json", "utf-8");
            genres = data ? JSON.parse(data) : [];
            if (!Array.isArray(genres))
                genres = [];
        }
        genres.push(res);
        fs.writeFileSync("dist/data/genres.json", JSON.stringify(genres, null, 2), "utf8");
        console.log("Genre added successfully");
    }
    catch (error) {
        console.error("Error writing JSON file:", error);
    }
}
//for (let i = 0; i < genres.length; i++) {
//    generate_genre(i, genres);
//}
/*

def generate_publisher():
    return {
        "id": random.randint(1,100),
        "name": fake.company(),
        "country": fake.country(),
        "foundedYear": random.randint(1800, 2026),
        "website": fake.url(),
        "createdAt": fake.date_time()
    }
*/
//Publisher adding and deleting functions---------------------------------------------------------------------------------------------------------------------
function generate_publisher() {
    let res = {
        id: Math.round(Math.random() * 1000),
        name: faker.company.name(),
        country: faker.location.country(),
        foundedYear: randomInt(1800, 2026),
        website: faker.internet.url(),
        createdAt: faker.date.past()
    };
    try {
        let publishers = [];
        if (fs.existsSync("dist/data/publishers.json")) {
            const data = fs.readFileSync("dist/data/publishers.json", "utf-8");
            publishers = data ? JSON.parse(data) : [];
            if (!Array.isArray(publishers))
                publishers = [];
        }
        publishers.push(res);
        fs.writeFileSync("dist/data/publishers.json", JSON.stringify(publishers, null, 2), "utf8");
        console.log("Publisher added successfully");
    }
    catch (error) {
        console.error("Error writing JSON file:", error);
    }
}
//generate_publisher();
export function delete_publisher(id) {
    const data = fs.readFileSync("dist/data/publishers.json", "utf-8");
    const publishers = JSON.parse(data);
    const updatedPublishers = publishers.filter((publisher) => publisher.id !== id);
    if (updatedPublishers.length === publishers.length) {
        console.log("Publisher with id " + id + " not found.");
        return "Publisher with id " + id + " not found.";
    }
    fs.writeFileSync("dist/data/publishers.json", JSON.stringify(updatedPublishers, null, 2));
    console.log("Publisher with id " + id + " deleted.");
    return "Publisher with id " + id + " deleted.";
}
//delete_publisher(466);
//---------------------------------------------------------------------------------------------------------------------------------------
/*def generate_review():
    return {
        "id": random.randint(1,100),
        "userName": random.randint(1,100),
        "bookId": random.randint(1,100),
        "rating": random.randint(1, 5),
        "comment": fake.text(max_nb_chars=200),
        "createdAt": fake.date_time()
    }

*/
export function currentBookIds() {
    const data = fs.readFileSync("dist/data/books.json", "utf-8");
    const books = JSON.parse(data);
    let idList = [];
    for (let i = 0; i < books.length; i++) {
        idList.push(books[i].id);
    }
    return idList;
}
const idList = currentBookIds();
export function generate_review(idList, bookId = idList[Math.floor(Math.random() * idList.length)]) {
    let res = {
        id: Math.round(Math.random() * 1000),
        userName: faker.internet.username(),
        bookId: bookId,
        rating: Math.floor(Math.random() * 5),
        comment: faker.lorem.paragraph() || "",
        createdAt: faker.date.past()
    };
    try {
        let reviews = [];
        if (fs.existsSync("dist/data/reviews.json")) {
            const data = fs.readFileSync("dist/data/reviews.json", "utf-8");
            reviews = data ? JSON.parse(data) : [];
            if (!Array.isArray(reviews))
                reviews = [];
        }
        reviews.push(res);
        fs.writeFileSync("dist/data/reviews.json", JSON.stringify(reviews, null, 2), "utf8");
        console.log("Review added successfully");
        return "Review added successfully";
    }
    catch (error) {
        console.error("Error writing JSON file:", error);
    }
}
//generate_review();
//generate_review(idList, 2);
export function delete_review(id) {
    const data = fs.readFileSync("dist/data/reviews.json", "utf-8");
    const reviews = JSON.parse(data);
    const updatedReviews = reviews.filter((review) => review.id !== id);
    if (updatedReviews.length === reviews.length) {
        console.log("Review with id " + id + " not found.");
        return "Review with id " + id + " not found.";
    }
    fs.writeFileSync("dist/data/reviews.json", JSON.stringify(updatedReviews, null, 2));
    console.log("Review with id " + id + " deleted.");
    return "Review with id " + id + " deleted.";
}
export function getBookById(id) {
    const data = fs.readFileSync("dist/data/books.json", "utf-8");
    const jsonData = JSON.parse(data);
    for (const book of jsonData) {
        if (book.id === id) {
            const bookFinal = book;
            return bookFinal;
        }
    }
    return "Book with id:" + id + " not found!";
}
export function getAllBooks() {
    const data = fs.readFileSync("dist/data/books.json", "utf-8");
    const jsonData = JSON.parse(data);
    return jsonData;
}
export function getReviewByBookId(id) {
    const data = fs.readFileSync("dist/data/reviews.json", "utf-8");
    const jsonData = JSON.parse(data);
    const reviewList = [];
    for (const review of jsonData) {
        if (review.bookId === id) {
            reviewList.push(review);
        }
    }
    if (reviewList.length > 0) {
        console.log(reviewList);
        return reviewList;
    }
    else {
        console.log("Review with bookId:" + id + " not found!");
        return "Review with bookId:" + id + " not found!";
    }
}
export function review_cleaner(idList) {
    const data = fs.readFileSync("dist/data/reviews.json", "utf-8");
    const reviews = JSON.parse(data);
    for (let i = 0; i < reviews.length; i++) {
        if (!(reviews[i].bookId in idList)) {
            const updatedReviews = reviews.filter((review) => review.bookId !== reviews[i].bookId);
            fs.writeFileSync("dist/data/reviews.json", JSON.stringify(updatedReviews, null, 2));
        }
    }
    console.log("Reviews with unreal bookId + deleted.");
}
export function getBookRating(bookId) {
    const data = fs.readFileSync("dist/data/reviews.json", "utf-8");
    const reviews = JSON.parse(data);
    let collector = 0;
    let counter = 0;
    let result = 0;
    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].bookId === bookId) {
            let rating = Number(reviews[i].rating);
            collector += rating;
            counter++;
        }
    }
    result = collector / counter;
    console.log(Math.round(result * 10) / 10);
    return Math.round(result * 10) / 10;
}
