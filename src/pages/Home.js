import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";

function Home() {
  return (
    <div className="container">
      <SearchBar />
      <BookList />
    </div>
  );
}

export default Home;