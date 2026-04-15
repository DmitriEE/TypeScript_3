"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate_book = generate_book;
exports.delete_book = delete_book;
exports.delete_author = delete_author;
const fs = __importStar(require("node:fs"));
const faker_1 = require("@faker-js/faker");
const random = Math.random();
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const genres = ["fantasy", "science fiction", "mystery", "romance", "horror", "thriller", "historical", "non-fiction", "biography", "self-help"];
// Book adding and deleting functions -----------------------------------------------------------------------------------------
function generate_book(genres) {
    let res = {
        "id": Math.round(Math.random() * 1000),
        "title": faker_1.faker.lorem.sentence(),
        "isbn": Number(Array.from({ length: 13 }, () => Math.floor(Math.random() * 10)).join('')),
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
//delete_book(id);
//---------------------------------------------------------------------------------------------------------------------
function generate_author() {
    let res = {
        id: Math.round(Math.random() * 1000),
        firstName: faker_1.faker.person.firstName(),
        lastName: faker_1.faker.person.lastName(),
        birthYear: randomInt(1900, 2026),
        nationality: faker_1.faker.location.country(),
        biography: faker_1.faker.lorem.paragraph(),
        createdAt: faker_1.faker.date.past()
    };
    try {
        let authors = [];
        if (fs.existsSync("authors.json")) {
            const data = fs.readFileSync("authors.json", "utf-8");
            authors = data ? JSON.parse(data) : [];
            if (!Array.isArray(authors))
                authors = [];
        }
        authors.push(res);
        fs.writeFileSync("authors.json", JSON.stringify(authors, null, 2), "utf8");
        console.log("Author added successfully");
    }
    catch (error) {
        console.error("Error writing JSON file:", error);
    }
}
//generate_author();
function delete_author(id) {
    const data = fs.readFileSync("../../dist/data/authors.json", "utf-8");
    const authors = JSON.parse(data);
    const idToDelete = id;
    const updatedAuthors = authors.filter((author) => author.id !== idToDelete);
    fs.writeFileSync("../../dist/data/authors.json", JSON.stringify(updatedAuthors, null, 2));
    console.log("Элемент удалён");
}
//delete_author(id);
//------------------------------------------------------------------------------------
//const genres = ["fantasy", "science fiction", "mystery", "romance", "horror", "thriller", "historical", "non-fiction", "biography", "self-help"];
function generate_genre(int, genres) {
    let res = {
        id: int,
        name: genres[int]
    };
    try {
        let genres = [];
        if (fs.existsSync("genres.json")) {
            const data = fs.readFileSync("genres.json", "utf-8");
            genres = data ? JSON.parse(data) : [];
            if (!Array.isArray(genres))
                genres = [];
        }
        genres.push(res);
        fs.writeFileSync("genres.json", JSON.stringify(genres, null, 2), "utf8");
        console.log("Genre added successfully");
    }
    catch (error) {
        console.error("Error writing JSON file:", error);
    }
}
for (let i = 0; i < genres.length; i++) {
    generate_genre(i, genres);
}
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
function generate_publisher() {
    let res = {
        id: Math.round(Math.random() * 1000),
        name: faker_1.faker.company.name(),
        country: faker_1.faker.location.country(),
        foundedYear: randomInt(1800, 2026),
        website: faker_1.faker.internet.url(),
        createdAt: faker_1.faker.date.past()
    };
    try {
        let publishers = [];
        if (fs.existsSync("publishers.json")) {
            const data = fs.readFileSync("publishers.json", "utf-8");
            publishers = data ? JSON.parse(data) : [];
            if (!Array.isArray(publishers))
                publishers = [];
        }
        publishers.push(res);
        fs.writeFileSync("publishers.json", JSON.stringify(publishers, null, 2), "utf8");
        console.log("Publisher added successfully");
    }
    catch (error) {
        console.error("Error writing JSON file:", error);
    }
}
generate_publisher();
/*
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
