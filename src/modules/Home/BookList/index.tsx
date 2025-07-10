import { Book } from "@/@types/book";
import BookItem from "../components/BookItem";

type BookListProps = {
  books: Book[];
  searchQuery: string;
  currentCategory: string;
};

export const BookList = ({ books, searchQuery, currentCategory }: BookListProps) => {
  if (books.length === 0) {
    let message = "Nenhum livro encontrado.";
    if (searchQuery && currentCategory) {
      message = `Nenhum livro encontrado para "${searchQuery}" na categoria "${currentCategory}".`;
    } else if (searchQuery) {
      message = `Nenhum livro encontrado para "${searchQuery}".`;
    } else if (currentCategory) {
      message = `Nenhum livro encontrado na categoria "${currentCategory}".`;
    }

    return (
      <div className="text-center py-10">
        <p className="text-xl text-gray-600">{message}</p>
        <p className="text-gray-500 mt-2">Tente ajustar sua busca ou filtros.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};