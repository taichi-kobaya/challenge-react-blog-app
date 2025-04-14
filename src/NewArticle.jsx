import { useState } from "react";

function PostForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [posts, setPosts] = useState([]);
    const [titleError, setTitleError] = useState("");
    const [contentError, setContentError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            setTitleError("タイトルを入力してください");
        } else {
            setTitleError("");
        }
        if (!content.trim()) {
            setContentError("本文を入力してください");
        } else {
            setContentError("");
        }
        if (!title.trim() || !content.trim()) return;
        const newPost = { title, content };
        setPosts([newPost, ...posts]);
        setTitle("");
        setContent("");
        setError("");
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            {/* {error && (
                <div className="flex items-center text-red-600 bg-red-100 border border-red-300 p-2 rounded animate-pulse">
                    <span className="mr-2">⚠️</span>
                    <span>{error}</span>
                </div>
            )} */}
            <form onSubmit={handleSubmit} className="space-y-2">
                <input 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 w-full"
                    placeholder="タイトルを入力" />
                {titleError && <p className="text-sm text-red-600 mt-1">⚠️{titleError}</p>}
                <input 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="border p-2 w-full"
                    placeholder="本文を入力" />
                {contentError && <p className="text-sm text-red-600 mt-1">⚠️{contentError}</p>}
                <button className="bg-blue-500 text-white px-4 py-2">投稿</button>
            </form>

            <div className="mt-6 space-y-4">
                {posts.map((posts, index) => (
                <div key={index} className="border p-4 rounded shadow">
                    <h2 className="text-lg font-bold">{posts.title}</h2>
                    <p>{posts.content}</p>
                </div>
                ))}
            </div>
        </div>
    );
}

export default PostForm;