import { useState } from 'react';

type FilterBarProps = {
    categories: string[];
    onFilter: (category: string) => void;
    selectedCategory: string;
  }
  
  const FilterBar = ({ categories, onFilter, selectedCategory }: FilterBarProps) => {
    const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onFilter(e.target.value);
    };
  
    return (
      <div className="mb-4">
        <select
          value={selectedCategory}
          onChange={handleFilter}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        >
          <option value="">Todas as Categorias</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>
    );
  };
  
  export default FilterBar;