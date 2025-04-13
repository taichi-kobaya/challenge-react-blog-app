import { useParams } from "react-router-dom";
import { articles } from "./articles";
import NotFound from "./NotFound";

function Article() {
    const { id } = useParams();
    const article = articles.find(a => a.id === Number(id));

    if (!article) return <NotFound/>;

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">{article.title}</h1>
            <p>{article.content}</p>
        </div>
    )
}
 export default Article;
