import { useState } from "react";

function PostForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [posts, setPosts] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { title, content };
        setPosts([newPost, ...posts]);
        setTitle("");
        setContent("");
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-2">
                <input 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 w-full"
                    placeholder="タイトルを入力" />
                <input 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="border p-2 w-full"
                    placeholder="本文を入力" />
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