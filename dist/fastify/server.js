import Fastify from 'fastify';
import { generate_book, getBookById, genres, getAllBooks, delete_book, currentBookIds, generate_review, getReviewByBookId, getBookRating } from './exportFunctions.js';
const server = Fastify({});
const idList = currentBookIds();
server.get('/api/v1/books/:id', async (request) => {
    const id = Number(request.params.id);
    const result = await getBookById(id);
    return { id: id, result: result };
});
server.post('/api/v1/books', async () => {
    const genre = genres;
    generate_book(genre);
    return { message: 'Книга создана' };
});
server.get('/api/v1/books', async () => {
    const result = getAllBooks();
    return { Books: result };
});
server.put('/api/v1/books/:id', async (request) => {
    const id = Number(request.params.id);
    const result = generate_book(genres, id);
    return { result: result };
});
server.delete('/api/v1/books/:id', async (request) => {
    const id = Number(request.params.id);
    const result = delete_book(id);
    return { result: result };
});
server.post('/api/v1/books/:bookId/reviews', async (request) => {
    const id = Number(request.params.bookId);
    const result = generate_review(idList, id);
    return { result: result };
});
server.get('/api/v1/books/:bookId/reviews', async (request) => {
    const id = Number(request.params.bookId);
    const result = await getReviewByBookId(id);
    return { id: id, result: result };
});
server.get('/api/v1/books/:id/average-rating', async (request) => {
    const id = Number(request.params.id);
    const result = await getBookRating(id);
    return { id: id, result: result };
});
const start = async () => {
    try {
        await server.listen({ port: 3000 });
        console.log(`Server running at http://localhost:3000/`);
        const address = server.server.address();
        const port = typeof address === 'string' ? address : address?.port;
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
