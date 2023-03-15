import React, { useState } from 'react';

const ITEMS = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Fig',
  'Grape',
  'Honeydew',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
  'Pineapple',
  'Strawberry',
  'Watermelon',
];

const SearchList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = ITEMS.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

const  handleClick = (event) => {
    event.preventDefault()
    setSearch("On")
  }

  return (
    <div>
      <h2>Search List</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
       <button onClick={handleClick} >Search</button>
       {search == "On" ? <ul>

       {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>: <div></div>}
    </div>
  );
};

export default SearchList;
