import { createStore } from 'vuex';
import { ActionTypes } from "../types/action-types.js";
import { MutationTypes } from "../types/mutation-types.js";
import posts from '../api/posts.js'

const state = {
    posts: JSON.parse(localStorage.getItem('NAMI_TEST_DATA') || '[]') || [],
}

const getters = {
    getPosts(state) {
        return state.posts;
    },
}

const actions = {
    async [ActionTypes.FETCH_POSTS]({ commit })  {
        const newPosts = await posts.fetchPostsData();
        localStorage.setItem('NAMI_TEST_DATA', JSON.stringify(newPosts));
        commit(MutationTypes.SET_POSTS, newPosts);
    },
}

const mutations = {
    [MutationTypes.SET_POSTS](state, data) {
        state.posts = data;
    },
}

export default createStore({
    state,
    getters,
    actions,
    mutations
});
