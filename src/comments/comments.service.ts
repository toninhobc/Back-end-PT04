import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsService {
  private comments = [];

  // Create
  create(content: string, postId: number, userId: number) {
    const comment = {
      id: this.comments.length + 1,
      content,
      postId,
      userId,
      createdAt: new Date(),
    };
    this.comments.push(comment);
    return comment;
  }

  // Read (all comments or by post)
  findAll() {
    return this.comments;
  }

  findByPostId(postId: number) {
    return this.comments.filter((comment) => comment.postId === postId);
  }

  // Update
  update(id: number, content: string) {
    const comment = this.comments.find((c) => c.id === id);
    if (!comment) throw new Error('Comment not found');
    comment.content = content;
    comment.updatedAt = new Date();
    return comment;
  }

  // Delete
  remove(id: number) {
    const index = this.comments.findIndex((c) => c.id === id);
    if (index === -1) throw new Error('Comment not found');
    this.comments.splice(index, 1);
    return { message: 'Comment deleted' };
  }
}
