import { createStore, Commit } from 'vuex';
import posts from '../api/posts';
import { ActionTypes } from "../types/action-types";
import { MutationTypes } from "../types/mutation-types";
import { Post, PostsState } from "../types";

const state: PostsState = {
    posts: JSON.parse(localStorage.getItem('NAMI_TEST_DATA') || '[]') || [],
}

const getters = {
    getPosts: (state: PostsState): Array<Post> => {
        return state.posts;
    },
}

const actions = {
    async [ActionTypes.FETCH_POSTS]({ commit }: { commit: Commit })  {
        const newPosts = await posts.fetchPostsData();
        localStorage.setItem('NAMI_TEST_DATA', JSON.stringify(newPosts));
        commit(MutationTypes.SET_POSTS, newPosts);
    },
}

const mutations = {
    [MutationTypes.SET_POSTS](state: PostsState, data: Array<Post>): void {
        state.posts = data;
    },
}

export default createStore({
    state,
    getters,
    actions,
    mutations
});
