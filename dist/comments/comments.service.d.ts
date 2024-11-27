export declare class CommentsService {
    private comments;
    create(content: string, postId: number, userId: number): {
        id: number;
        content: string;
        postId: number;
        userId: number;
        createdAt: Date;
    };
    findAll(): any[];
    findByPostId(postId: number): any[];
    update(id: number, content: string): any;
    remove(id: number): {
        message: string;
    };
}
