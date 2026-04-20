import * as fs_prom from 'node:fs/promises';
import fs from 'fs';
import { faker } from '@faker-js/faker';
const random = Math.random();
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const genres = ["fantasy", "science fiction", "mystery", "romance", "horror", "thriller", "historical", "non-fiction", "biography", "self-help"];
// Book adding and deleting functions -----------------------------------------------------------------------------------------
export function generate_book(genres) {
    let res = {
        "id": Math.round(Math.random() * 1000),
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
export function delete_book(id) {
    const data = fs.readFileSync("dist/data/books.json", "utf-8");
    const books = JSON.parse(data);
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            const idToDelete = id;
            const updatedBooks = books.filter((book) => book.id !== idToDelete);
            fs.writeFileSync("dist/data/books.json", JSON.stringify(updatedBooks, null, 2));
            console.log("Book / Books with id " + id + " deleted.");
            return;
        }
    }
    console.log("Book with id " + id + " not found.");
    return;
}
delete_book(317);
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
export function delete_author(id) {
    const data = fs.readFileSync("dist/data/authors.json", "utf-8");
    const authors = JSON.parse(data);
    for (let i = 0; i < authors.length; i++) {
        if (authors[i].id === id) {
            const idToDelete = id;
            const updatedAuthors = authors.filter((author) => author.id !== idToDelete);
            fs.writeFileSync("dist/data/authors.json", JSON.stringify(updatedAuthors, null, 2));
            console.log("Author / Authors with id " + id + " deleted.");
            return;
        }
    }
    console.log("Author with id " + id + " not found.");
    return;
}
delete_author(430);
//Genre adding function------------------------------------------------------------------------------------
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
    for (let i = 0; i < publishers.length; i++) {
        if (publishers[i].id === id) {
            const idToDelete = id;
            const updatedPublishers = publishers.filter((publisher) => publisher.id !== idToDelete);
            fs.writeFileSync("dist/data/publishers.json", JSON.stringify(updatedPublishers, null, 2));
            console.log("Publisher / Publishers with id " + id + " deleted.");
            return;
        }
    }
    console.log("Publisher with id " + id + " not found.");
    return;
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
/* Books

import fs from 'fs';
import { faker } from '@faker-js/faker';
import { Book } from '../models/Book.js';
import { Author } from '../models/Author.js';
import { Genre } from '../models/Genre.js';
import { Publisher } from '../models/Publisher.js';






*/
export async function getBookById(id) {
    try {
        const data = await fs_prom.readFile("dist/data/books.json", "utf-8");
        const jsonData = JSON.parse(data);
        for (const book of jsonData) {
            if (book.id === id) {
                console.log(`Книга с id ${id} найдена:`, book);
                return book;
            }
        }
        console.log("Асинхронное чтение файлов завершено");
    }
    catch (error) {
        console.error("Ошибка чтения файла:", error);
    }
}
