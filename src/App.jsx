import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { articles as initialArticles } from "./articles";
import Article from './Article';
import NewArticle from './NewArticle';

function App() {
  const [articles, setArticles] = useState(initialArticles);

  const handleAddPost = (newPost) => {
    const id = Date.now().toString(); 
    setArticles([{ id, ...newPost }, ...articles]);
  };

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
      <Route path="/articles/:id" element={<Article articles={articles}/>} />
      <Route path="/articles/new" element={<NewArticle onAddPost={handleAddPost} />} />
    </Routes>
  );
}

export default App;
