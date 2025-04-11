import { useParams } from "react-router-dom";
import { articles } from "./articles";

function Article() {
    const { id } = useParams();
    const article = articles.find(a => a.id === Number(id));
    return article ? <div>{article.title}</div> : <div>記事が見つかりません</div>;
}
 export default Article;
