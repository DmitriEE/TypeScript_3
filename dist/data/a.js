"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate_book = generate_book;
exports.delete_book = delete_book;
const fs = require("fs");
const faker_1 = require("@faker-js/faker");
const random = Math.random();
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const genres = ["fantasy", "science fiction", "mystery", "romance", "horror", "thriller", "historical", "non-fiction", "biography", "self-help"];
function generate_book(genres) {
    let res = {
        "id": Math.round(Math.random() * 1000),
        "title": faker_1.faker.lorem.sentence(),
        "isbn": Array.from({ length: 13 }, () => Math.floor(Math.random() * 10)).join(''),
        "publishedYear": randomInt(1900, 2026),
        "pageCount": randomInt(100, 1000),
        "language": faker_1.faker.lorem.word(),
        "description": faker_1.faker.lorem.paragraph(),
        "authorId": Math.round(Math.random() * 1000),
        "publisherId": Math.round(Math.random() * 1000),
        "genres": [faker_1.faker.helpers.arrayElement(genres)],
        "createdAt": faker_1.faker.date.past(),
        "updatedAt": faker_1.faker.date.past()
    };
    try {
        let books = [];
        if (fs.existsSync("books.json")) {
            const data = fs.readFileSync("books.json", "utf-8");
            books = data ? JSON.parse(data) : [];
            if (!Array.isArray(books))
                books = [];
        }
        books.push(res);
        fs.writeFileSync("books.json", JSON.stringify(books, null, 2), "utf8");
        console.log("Book added successfully");
    }
    catch (error) {
        console.error("Error writing JSON file:", error);
    }
}
// generate_book(genres);
function delete_book(id) {
    const data = fs.readFileSync("../../dist/data/books.json", "utf-8");
    const books = JSON.parse(data);
    const idToDelete = id;
    const updatedBooks = books.filter((book) => book.id !== idToDelete);
    fs.writeFileSync("../../dist/data/books.json", JSON.stringify(updatedBooks, null, 2));
    console.log("Элемент удалён");
}
delete_book(729);
delete_book(39);
/*
    const Author= {
        "id": random * 100,
        "firstName": faker.person.firstName(),
        "lastName": faker.person.lastName(),
        "birthYear": randomInt(1900, 2026),
        "mationality": faker.location.country(),
        "biography": faker.lorem.paragraph(),
        "createdAt": faker.date.past()
    }


    
def generate_genre(genres):
    a = random.choice(genres)
    return {
        "id": genres.index(a) + 1,
        "name": a,
    }

def generate_publisher():
    return {
        "id": random.randint(1,100),
        "name": fake.company(),
        "country": fake.country(),
        "foundedYear": random.randint(1800, 2026),
        "website": fake.url(),
        "createdAt": fake.date_time()
    }
def generate_review():
    return {
        "id": random.randint(1,100),
        "userId": random.randint(1,100),
        "bookId": random.randint(1,100),
        "rating": random.randint(1, 5),
        "comment": fake.text(max_nb_chars=200),
        "createdAt": fake.date_time()
    }
*/
