import { useCallback } from 'react';
import debounce from 'lodash/debounce';

type SearchBarProps = {
  onSearch: (query: string) => void;
  value: string;
}

const SearchBar = ({ onSearch, value }: SearchBarProps) => {
  const debouncedSearch = useCallback(
    debounce((searchQuery: string) => {
      onSearch(searchQuery);
    }, 300),
    [onSearch]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  return (
    <div className="flex-grow">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Buscar livros..."
        className="border border-gray-300 rounded px-4 py-2 w-full"
      />
    </div>
  );
};

export default SearchBar;