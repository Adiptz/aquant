import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import ArticlesList from "./components/ArticleList/ArticlesList";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <div className="App">
      <SearchBar/>
        <Categories/>
      <ArticlesList/>
    </div>
  );
}

export default App;
