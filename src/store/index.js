// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        postList:[
            {id: 1, account: "@catLover123", postDate: "12.12.2023", PostText: "Look at my cute cat!", picInfo: require("../../public/images/kiisu.jpg"), likeCount: 0},
            {id: 2, account: "@teacherKaren", postDate: "17.12.2023", PostText: "Who left the lights on in the kitchen?!", picInfo: null, likeCount: 0},
            {id: 3, account: "@teacherLaura", postDate: "18.12.2023", PostText: "I did, whoopsie:)!", picInfo: null, likeCount: 0},
            {id: 4, account: "@teacherKaren", postDate: "18.12.2023", PostText: "What an abysmal:(!", picInfo: null, likeCount: 0}

        ]

    },
    mutations: {
        IncreaseLike: (state, postId )=> {
            const post = state.postList.find(post => post.id === postId);
            if (post) {
                post.likeCount += 1;
            }
        },

        resetLikes: state => {
            state.postList.forEach(post => {
                post.likeCount = 0;
            })
        }
    },
    actions: {},
    getters: {}
});


