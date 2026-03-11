import { faker } from '@faker-js/faker';
import { c } from '@faker-js/faker/dist/airline-Dz1uGqgJ';
const random = Math.random();
const randomInt = (min: number, max: number): number => 
  Math.floor(Math.random() * (max - min + 1)) + min;
const genres = ["fantasy", "science fiction", "mystery", "romance", "horror", "thriller", "historical", "non-fiction", "biography", "self-help"];
const Author= {
        "id": random * 100,
        "firstName": faker.person.firstName(),
        "lastName": faker.person.lastName(),
        "birthYear": randomInt(1900, 2026),
        "mationality": faker.location.country(),
        "biography": faker.lorem.paragraph(),
        "createdAt": faker.date.past()
    }

const Book = {
        "id": random * 100,
        "title": faker.lorem.sentence(),
        "isbn": faker.datatype.uuid(),
        "publishedYear": randomInt(1900, 2026),
        "pageCount": randomInt(100, 1000),
        "language": faker.lorem.word(),
        "description": faker.lorem.paragraph(),
        "authorId": random * 100,
        "publisherId": random * 100,
        "genres": faker.helpers.arrayElement(genres),
        "createdAt": faker.date.past(),
        "updatedAt": faker.date.past()

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


