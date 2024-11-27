import { CommentsService } from './comments.service';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(body: {
        content: string;
        postId: number;
        userId: number;
    }): {
        id: number;
        content: string;
        postId: number;
        userId: number;
        createdAt: Date;
    };
    findAll(): any[];
    findByPost(postId: string): any[];
    update(id: string, body: {
        content: string;
    }): any;
    remove(id: string): {
        message: string;
    };
}
