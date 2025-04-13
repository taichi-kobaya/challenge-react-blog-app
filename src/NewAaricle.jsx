import { useState } from "react";

export default function NewArticle() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("タイトル:", title);
        console.log("本文:", content);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button>
                    投稿
                </button>
            </form>
        </div>
    )
}