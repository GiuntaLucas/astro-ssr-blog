export const getComment = (postId: number) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(x => x.json());
}