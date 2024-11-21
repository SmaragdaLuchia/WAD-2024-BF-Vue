// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        postList:[
            {id: 1, account: "@catLover123", postDate: "12.12.2023", PostText: "Look at my cute cat!", picInfo: require("../../public/images/kiisu.jpg")},
            {id: 2, account: "@teacherKaren", postDate: "17.12.2023", PostText: "Who left the lights on in the kitchen?!", picInfo: null},
            {id: 3, account: "@teacherLaura", postDate: "18.12.2023", PostText: "I did, whoopsie:)!", picInfo: null},
            {id: 4, account: "@teacherKaren", postDate: "18.12.2023", PostText: "What an abysmal:(!", picInfo: null}

        ]

    },
    mutations: {},
    actions: {},
    getters: {}
});


