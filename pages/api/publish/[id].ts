// PUT /api/publish/:id

import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
  const postId = req.query.id;
  const post = await prisma.post.update({
    where: { id: Number(postId) },
    // 公開に切り替える
    data: { published: true },
  });
  res.json(post);
}