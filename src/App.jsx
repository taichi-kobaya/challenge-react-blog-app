import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { articles as initialArticles } from "./articles";
import Article from './Article';
import NewArticle from './NewArticle';

function App() {
  const [articleList, setArticleList] = useState(initialArticles);

  const handleCreateArticle = (newArticle) => {
    const id = Date.now().toString(); 
    setArticleList([{ id, ...newArticle }, ...articleList]);
  };

  return (
    <Routes>
      <Route path="/" element={
        <ul>
          {articleList.map(article => (
            <li key={article.id}>
              <Link to={`/articles/${article.id}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      } />
      <Route path="/articles/:id" element={<Article articles={articleList}/>} />
      <Route path="/articles/new" element={<NewArticle onCreateArticle={handleCreateArticle} />} />
    </Routes>
  );
}

export default App;
