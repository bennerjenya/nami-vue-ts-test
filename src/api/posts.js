export default {
    async fetchPostsData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            console.error('Не удалось загрузить данные с сервера');
            return new Error('Не удалось получить данные');
        }
        return (await response.json() ?? []);
    },
};
