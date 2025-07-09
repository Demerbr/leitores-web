'use client'

import { Book } from "@/@types/book";
import { BookList } from "@/shared/components/BookList";
import FilterBar from "@/shared/components/FilterBar";
import SearchBar from "@/shared/components/SearchBar";
import { useCallback, useState } from "react";

export function HomeModule(){
  const [books, setBooks] = useState<Book[]>([
    { 
      id: 1, 
      title: 'O Peregrino', 
      author: 'John Bunyan', 
      coverImage: '/book1.jpg',
      publisher: 'Editora Mundo Cristão',
      categories: ['Ficção Cristã', 'Alegoria'],
      status: 'available'

    },
    { 
      id: 2, 
      title: 'Mero Cristianismo', 
      author: 'C.S. Lewis', 
      coverImage: '/meroCristianismo.webp',
      publisher: 'Thomas Nelson Brasil',
      categories: ['Apologética', 'Teologia'],
      status: 'available'
    },
    { 
      id: 3, 
      title: 'A Razão da Nossa Fé', 
      author: 'R.C. Sproul', 
      coverImage: '/book3.jpg',
      publisher: 'Cultura Cristã',
      categories: ['Teologia', 'Apologética'],
      status: 'borrowed'
    },
    { 
      id: 4, 
      title: 'Cristianismo Puro e Simples', 
      author: 'C.S. Lewis', 
      coverImage: '/puroESimples.jpg',
      publisher: 'Thomas Nelson Brasil',
      categories: ['Apologética', 'Espiritualidade'],
      status: 'available'

    },
  ]);

  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);
  const [currentCategory, setCurrentCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const allCategories = Array.from(new Set(books.flatMap(book => book.categories)));

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    const filtered = books.filter(book => 
      (book.title.toLowerCase().includes(query.toLowerCase()) ||
       book.author.toLowerCase().includes(query.toLowerCase())) &&
      (currentCategory === '' || book.categories.includes(currentCategory))
    );
    setFilteredBooks(filtered);
  }, [books, currentCategory]);

  const handleFilter = (category: string) => {
    setCurrentCategory(category);
    const filtered = books.filter(book => 
      (category === '' || book.categories.includes(category)) &&
      (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       book.author.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredBooks(filtered);
  };
  const applyFilters = (query: string, category: string) => {
    const filtered = books.filter(book => 
      (book.title.toLowerCase().includes(query.toLowerCase()) ||
       book.author.toLowerCase().includes(query.toLowerCase())) &&
      (category === '' || book.categories.includes(category))
    );
    setFilteredBooks(filtered);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setCurrentCategory('');
    setFilteredBooks(books);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Catálogo de Livros</h1>
      <div className='flex items-center md:items-start flex-col md:flex-row  md:gap-8 gap-2'>
        <SearchBar onSearch={handleSearch} />
        <FilterBar categories={allCategories} onFilter={handleFilter} />
        <button 
          onClick={clearFilters}
          className="ml-4 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition duration-300"
        >
          Limpar Filtros
        </button>
      </div>
      <BookList 
        books={filteredBooks} 
        searchQuery={searchQuery}
        currentCategory={currentCategory}
      />
    </div>
  );
}