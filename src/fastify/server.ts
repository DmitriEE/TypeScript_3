import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import { generate_book, getBookById , genres , getAllBooks, delete_book , currentBookIds , generate_review, getReviewByBookId, getBookRating} from './exportFunctions.js'

const server: FastifyInstance = Fastify({})
const idList: number[] = currentBookIds();


server.get<{
  Params: { id: string }
}>('/api/v1/books/:id', async (request) => {
  const id = Number(request.params.id);
  const result = await getBookById(id);
  return { id: id, result: result };
});
server.post('/api/v1/books', async () => {
  const genre = genres;
  generate_book(genre)
  return { message: 'Книга создана' };
});

server.get('/api/v1/books', async () => {
  const result = getAllBooks();
  return { Books: result };
});
server.put<{
  Params: { id: string }
}>('/api/v1/books/:id', async (request) => {
  const id = Number(request.params.id);
  const result = generate_book(genres, id);
  return { result: result };
});

server.delete<{
  Params: { id: string }
}>('/api/v1/books/:id', async (request) => {
  const id = Number(request.params.id);
  const result = delete_book(id);
  return { result: result };
});


server.post<{
  Params: { bookId: string }
}>('/api/v1/books/:bookId/reviews', async (request) => {
  const id = Number(request.params.bookId);
  const result = generate_review(idList, id);
  return { result: result };
});


server.get<{
  Params: { bookId: string }
}>('/api/v1/books/:bookId/reviews', async (request) => {
  const id = Number(request.params.bookId);
  const result = await getReviewByBookId(id);
  return { id: id, result: result };
});

server.get<{
  Params: { id: string }
}>('/api/v1/books/:id/average-rating', async (request) => {
  const id = Number(request.params.id);
  const result = await getBookRating(id);
  return { id: id, result: result };
});

const start = async () => {
  try {
    await server.listen({ port: 3000 })
    console.log(`Server running at http://localhost:3000/`);
    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port

  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
