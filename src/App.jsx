import { articles } from "./articles";

function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-500">Hello Tailwind!</h1>
      <h1>記事一覧</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
