import "./SearchTodo.css";
import { useEffect, useState } from "react";

const SearchTodo = (props) => {
  const [search, setSearch] = useState("");
//   console.log(search);

  useEffect(() => {
    props.getDataValue(search);
  });

  return (
    <div className={props.darkMode ? 'darkSearch-container' : 'lightSearch-container'}>
      <input
        className="input-open"
        type="search"
        placeholder="🔍︎ Search"
        id="searchField"
        autocomplete="off"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchTodo;
