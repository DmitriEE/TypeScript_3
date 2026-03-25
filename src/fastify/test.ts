import Fastify from 'fastify';

const fastify = Fastify();

const start = async (): Promise<void> => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server is running at http://localhost:3000');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
type Book = {
  title: string;
  author: string;
};

fastify.post<{ Body: Book }>('/api/v1/books', async (request, reply) => {
  const { title, author } = request.body;

  return {
    message: 'Book created',
    book: { title, author }
  };
});