import { Post } from "../interfaces/post";

export const getPosts = (): Promise<Post[]> => {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(x => x.json());
}