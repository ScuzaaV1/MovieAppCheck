import "./App.css";
import { useState } from "react";
import { moviesData } from "./data";
import MovieList from "./Components/MovieList";
import AddNewMovie from "./Components/AddNewMovie";
import Search from "./Components/Search";

function App() {
  const [list, setList] = useState(moviesData);
  const [searchText, setsearchText] = useState("");
  const [rating, setRating] = useState(2);
  const handleSearchText = (x) => setsearchText(x);
  const handleRating = (x) => setRating(x);
  const handleAdd = (newOne) => setList([...list, newOne]);
  
  return (
    <div className="App">
      <Search
        handleSearchText={handleSearchText}
        handleRating={handleRating}
        rating={rating}
        searchText={searchText}
      />
      <MovieList
        movies={list.filter(
          (el) =>
            el.name.toUpperCase().includes(searchText.toUpperCase()) &&
            el.rating >= rating
        )}
        
        
      />
      <AddNewMovie handleAdd={handleAdd} />
    </div>
  );
}

export default App;
