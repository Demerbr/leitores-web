import { useState } from 'react';
import Image from 'next/image';
import LoanRequestModal, { LoanRequestData } from '../LoanRequestModal';

type Book = {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  publisher: string;
  categories: string[];
  status: 'available' | 'borrowed';
};

type BookItemProps = {
  book: Book;
};

const BookItem = ({ book }: BookItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoanRequest = (data: LoanRequestData) => {
    console.log('Loan request data:', data);
    // Implemente a lógica para processar a solicitação de empréstimo
  };

  const isBorrowed = book.status === 'borrowed';

  return (
    <div className={`bg-white max-w-[280px] rounded-lg shadow-md overflow-hidden flex flex-col 
                     ${isBorrowed ? 'opcity-75 grayscale' : ''}`}>
      <div className="relative">
        <Image 
          src={book.coverImage} 
          alt={`Capa de ${book.title}`} 
          width={200} 
          height={300} 
          className={`w-full h-48 object-fill ${isBorrowed ? 'filter blur-[1px]' : ''}`}
        />
        {isBorrowed && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <span className="text-white text-sm font-bold px-2 py-1 rounded">
              Emprestado
            </span>
          </div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold font-sora text-primary">{book.title}</h3>
        <p className="text-secondary">{book.author}</p>
        <p className="text-sm text-gray-600">{book.publisher}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {book.categories.map((category, index) => (
            <span 
              key={index} 
              className="text-xs bg-accent text-primary px-2 py-1 rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 flex justify-center">
          {!isBorrowed ? (
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-white px-3 py-1 text-sm rounded hover:bg-accent hover:text-primary transition duration-300 font-sora"
            >
              Solicitar Empréstimo
            </button>
          ) : (
            <button 
              className="bg-gray-400 text-white px-3 py-1 text-sm rounded cursor-not-allowed font-sora"
              disabled
            >
              Indisponível
            </button>
          )}
        </div>
      </div>

      <LoanRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleLoanRequest}
      />
    </div>
  );
};

export default BookItem;