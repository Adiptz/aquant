import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import ArticlesList from "./components/ArticleList/ArticlesList";

function App() {
  return (
    <div className="App">
      <SearchBar/>
        <ArticlesList/>
    </div>
  );
}

export default App;
