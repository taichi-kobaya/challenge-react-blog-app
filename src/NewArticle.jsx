import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostForm({ onAddPost }) {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
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
        onAddPost(newPost); 

        setTitle("");
        setContent("");

        navigate("/");
    };

    return (
        <div className="p-4 max-w-md mx-auto">
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
        </div>
    );
}

export default PostForm;
