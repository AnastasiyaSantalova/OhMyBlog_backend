import { db } from '../database';

export const getArticleRoute = {
    method: 'GET',
    path: '/api/articles/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        let res = await db.query(
            'SELECT * FROM articles WHERE id=? OR url=?',
            [id, id]
        );
        return res.results[0];
    }
}