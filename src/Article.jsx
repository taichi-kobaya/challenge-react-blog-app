import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

function Article() {
    const { id } = useParams();
    // ここは #9-3 で props 経由に切り替える予定。今回はその準備として import 削除のみ。
    // const article = articles.find(a => a.id === Number(id));
    
    if (!article) return <NotFound/>;

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">{article.title}</h1>
            <p>{article.content}</p>
        </div>
    )
}
 export default Article;
