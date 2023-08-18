import { Post } from "../types";

export default {
    async fetchPostsData(): Promise<Array<Post> | Error> {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            console.error('Не удалось загрузить данные с сервера');
            return new Error('Не удалось получить данные');
        }
        return (await response.json() ?? []);
    },
};
