import { createStore } from 'vuex';
import posts from '../api/posts';
import { ActionTypes } from "../types/action-types";
import { MutationTypes } from "../types/mutation-types";
import { Post } from "../types";

export default createStore({
    state:{
        posts: JSON.parse(localStorage.getItem('NAMI_TEST_DATA')) || [] as Array<Post>,
    },

    getters: {
        getPosts: (state): Array<Post> => {
            return state.posts;
        },
    },

    actions: {
        async [ActionTypes.FETCH_POSTS]({ commit }): void {
            const newPosts = await posts.fetchPostsData();
            localStorage.setItem('NAMI_TEST_DATA', JSON.stringify(newPosts));
            commit(MutationTypes.SET_POSTS, newPosts);
        },
    },

    mutations: {
        [MutationTypes.SET_POSTS](state, data: Array<Post>): void {
            state.posts = data;
        },
    },
});
