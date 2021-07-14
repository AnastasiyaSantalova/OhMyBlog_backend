import { v4 as uuid } from 'uuid';
import { db } from '../database';

export const createNewArticleRoute = {
    method: 'POST',
    path: '/api/articles',
    handler: async (req, h) => {
        const id = uuid();
        const { title = '', url = '', content = '', publicationDate = '' } = req.payload;
        const views = 0;
        console.log('post')

        await db.query(`
            INSERT INTO articles (id, url, title, content, publicationDate, views)
                VALUES (?, ?, ?, ?, ?, ?)
            `,
            [id, url, title, content, publicationDate, views]
        )

        return { id, url, title, content, publication_date: publicationDate, views }
    }
}