import { db } from '../database';

export const getAllArticlesRoute = {
    method: 'GET',
    path: '/api/articles',
    handler: async (req, h) => {
        let res = await db.query(
            'SELECT * FROM articles'
        );
        return res.results;
    }
}