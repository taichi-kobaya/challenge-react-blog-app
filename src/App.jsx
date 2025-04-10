function App() {
  const articles = [
    { id: 1, title: "Reactでブログを作る" },
    { id: 2, title: "10行チャレンジとは？" },
  ];

  return (
    <div>
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
