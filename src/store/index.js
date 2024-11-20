// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        postList:[
            {id: 1, account: "@catLover123", postDate: "12.12.2023", PostText: "Look at my cute cat!", picInfo: "src/assets/kiisu.jpg"},
            {id: 2, account: "@teacherKaren", postDate: "17.12.2023", PostText: "Who left the lights on in the kitchen?!", picInfo: null}
        ]

    },
    mutations: {},
    actions: {},
    getters: {}
});


