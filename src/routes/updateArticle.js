import { db } from '../database';

export const updateArticleRoute = {
    method: 'PUT',
    path: '/api/articles/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        const { title = '', url = '', content = '', publicationDate = '' } = req.payload;

        await db.query(`
            UPDATE articles 
                SET url=?, title=?, content=?, publicationDate=?
                WHERE id=?
            `,
            [url, title, content, publicationDate, id]
        )

        const res = await db.query(
            'SELECT * FROM articles WHERE id=?',
            [id]
        );
        return res.results[0];
    }
}