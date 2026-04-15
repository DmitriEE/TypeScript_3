import * as fs from 'node:fs';
import { faker } from '@faker-js/faker';
import { Book } from '../models/Book';
import { Author } from '../models/Author';
import { Genre } from '../models/Genre';
import { getRandomValues } from 'crypto';
import { Publisher } from '../models/Publisher';
const random = Math.random();
const randomInt = (min: number, max: number): number => 
  Math.floor(Math.random() * (max - min + 1)) + min;
const genres = ["fantasy", "science fiction", "mystery", "romance", "horror", "thriller", "historical", "non-fiction", "biography", "self-help"];
// Book adding and deleting functions -----------------------------------------------------------------------------------------
export function generate_book(genres: string[]): void { 
    let res: Book = {
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
    }
    try {
        let books: Book[] = [];
        if (fs.existsSync("books.json")) {
            const data = fs.readFileSync("books.json", "utf-8");
            books = data ? JSON.parse(data) : [];
            if (!Array.isArray(books)) books = [];
        }
        books.push(res);
        fs.writeFileSync("books.json", JSON.stringify(books, null, 2), "utf8");
        console.log("Book added successfully");
    } catch (error) {
        console.error("Error writing JSON file:", error);
    }
}
// generate_book(genres);

export function delete_book(id: number): void {
    const data = fs.readFileSync("../../dist/data/books.json", "utf-8");
    const books = JSON.parse(data);
    const idToDelete = id;
    const updatedBooks = books.filter((book: any) => book.id !== idToDelete);
    fs.writeFileSync("../../dist/data/books.json", JSON.stringify(updatedBooks, null, 2));
    console.log("Элемент удалён");
}
//delete_book(id);




//---------------------------------------------------------------------------------------------------------------------
function generate_author() {
    let res: Author = {
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
                authors= [];
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


export function delete_author(id: number): void {
    const data = fs.readFileSync("../../dist/data/authors.json", "utf-8");
    const authors = JSON.parse(data);
    const idToDelete = id;
    const updatedAuthors = authors.filter((author: any) => author.id !== idToDelete);
    fs.writeFileSync("../../dist/data/authors.json", JSON.stringify(updatedAuthors, null, 2));
    console.log("Элемент удалён");
}

//delete_author(id);
//------------------------------------------------------------------------------------
//const genres = ["fantasy", "science fiction", "mystery", "romance", "horror", "thriller", "historical", "non-fiction", "biography", "self-help"];
function generate_genre(int: number, genres: string[]) {
    let res: Genre = {
        id: int,
        name: genres[int]
    };
    try {
        let genres = [];
        if (fs.existsSync("genres.json")) {
            const data = fs.readFileSync("genres.json", "utf-8");
            genres = data ? JSON.parse(data) : [];
            if (!Array.isArray(genres))
                genres= [];
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
    let res: Publisher = {
        id: Math.round(Math.random() * 1000),
        name: faker.company.name(),
        country: faker.location.country(),
        foundedYear: randomInt(1800, 2026),
        website: faker.internet.url(),
        createdAt: faker.date.past()
    };
    try {
        let publishers = [];
        if (fs.existsSync("publishers.json")) {
            const data = fs.readFileSync("publishers.json", "utf-8");
            publishers = data ? JSON.parse(data) : [];
            if (!Array.isArray(publishers))
                publishers= [];
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

