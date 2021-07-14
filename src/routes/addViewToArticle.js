import { db } from '../database';

export const addViewToArticleRoute = {
    method: 'POST',
    path: '/api/articles/{id}/add-view',
    handler: async (req, h) => {
        const id = req.params.id;
        await db.query(
            'UPDATE articles SET views=views+1 WHERE id=?',
            [id]
        );
        let res = await db.query(
            'SELECT * FROM articles WHERE id=?',
            [id]
        );
        const updatedArticles = res.results[0];
        return updatedArticles;
    }
}