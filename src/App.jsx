import { Routes, Route, Link } from 'react-router-dom';
import { articles } from "./articles";

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
      <Route path="/articles/:id" element={<p>詳細ページ（仮）</p>} />
    </Routes>
  );
}

export default App;
