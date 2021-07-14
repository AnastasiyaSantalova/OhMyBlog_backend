import { db } from '../database';

export const deleteArticleRoute = {
    method: 'DELETE',
    path: '/api/articles/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        await db.query(
            'DELETE FROM articles WHERE id=?',
            [id]
        );
        return { message: 'Success!' };
    }
}