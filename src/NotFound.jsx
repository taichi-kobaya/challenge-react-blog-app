function NotFound() {
    return (
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold text-red-600">404 - 記事が見つかりませんでした</h1>
        <p className="mt-2">指定された記事IDに該当するデータが存在しません。</p>
      </div>
    );
  }

  export default NotFound;