import { Comment } from "../interfaces/comment";
export const getComment = (postId: number): Promise<Comment[]> => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(x => x.json());
}

export const getComments = (): Promise<Comment[]> => {
    return fetch(`https://jsonplaceholder.typicode.com/comments`).then(x => x.json());
}