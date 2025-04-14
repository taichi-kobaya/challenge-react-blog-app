import { Routes, Route, Link } from 'react-router-dom';
import { articles } from "./articles";
import Article from './Article'; 
import NewArticle from './NewArticle';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <ul>
          {articles.map(article => (
            <li key={article.id}>
              <Link to={`/articles/${article.id}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      } />
      <Route path="/articles/:id" element={<Article />} />
      <Route path="/articles/new" element={<NewArticle />} />
    </Routes>
  );
}

export default App;
