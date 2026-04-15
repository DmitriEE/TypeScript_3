
import * as fs from 'node:fs/promises';

export async function getBookById(id: number) {
  try {
    const data = await fs.readFile("../data/books.json", "utf-8");
    const jsonData = JSON.parse(data);
    for (const book of jsonData) {
      if (book.id === id) {
        console.log(book);
        return;
      }
    }
    console.log("Асинхронное чтение файлов завершено");
  } catch (error) {
    console.error("Ошибка чтения файла:", error);
  }
}