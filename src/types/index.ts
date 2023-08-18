export interface Post {
    id: number;
    userId: number;
    body: string;
    title: string;
}

export interface PostsState {
    posts: Array<Post>;
}
