
type FilterBarProps = {
    options: string[]; 
    onFilter: (option: string) => void;
    selectedOption: string; 
    placeholder?: string; 
  }
  
  const FilterBar = ({
    options,
    onFilter,
    selectedOption,
    placeholder = "Todas as opções"
  }: FilterBarProps) => {
    const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onFilter(e.target.value);
    };
  
    return (
      <div className="mb-4">
        <select
          value={selectedOption}
          onChange={handleFilter}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        >
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  };
  
  export default FilterBar;