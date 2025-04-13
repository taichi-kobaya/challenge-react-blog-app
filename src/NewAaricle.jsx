import { useState } from "react";

export default function NewArticle() {
    const [title, setTitle] = useState("");

    return (
        <div className="p-4">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 w-full"
                placeholder="タイトルを入力"
            />
        </div>
    )
}