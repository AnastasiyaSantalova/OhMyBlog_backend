import { addViewToArticleRoute } from "./addViewToArticle";
import { createNewArticleRoute } from "./createNewArticle";
import { deleteArticleRoute } from "./deleteArticle";
import { getAllArticlesRoute } from "./getAllArticles";
import { getArticleRoute } from "./getArticle";
import { updateArticleRoute } from "./updateArticle";

export default [
    getAllArticlesRoute,
    getArticleRoute,
    addViewToArticleRoute,
    createNewArticleRoute,
    updateArticleRoute,
    deleteArticleRoute,
];