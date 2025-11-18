interface Props {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ onSearchChange }: Props) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search Robots"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
