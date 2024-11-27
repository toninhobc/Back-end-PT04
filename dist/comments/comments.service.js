"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
let CommentsService = class CommentsService {
    constructor() {
        this.comments = [];
    }
    create(content, postId, userId) {
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
    findAll() {
        return this.comments;
    }
    findByPostId(postId) {
        return this.comments.filter((comment) => comment.postId === postId);
    }
    update(id, content) {
        const comment = this.comments.find((c) => c.id === id);
        if (!comment)
            throw new Error('Comment not found');
        comment.content = content;
        comment.updatedAt = new Date();
        return comment;
    }
    remove(id) {
        const index = this.comments.findIndex((c) => c.id === id);
        if (index === -1)
            throw new Error('Comment not found');
        this.comments.splice(index, 1);
        return { message: 'Comment deleted' };
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)()
], CommentsService);
//# sourceMappingURL=comments.service.js.map