<template>
  <div id="Container">
    <div class=postCompo >
      <p>You're all caught up!</p>
      <div class="post" v-for="post in postList" :key="post.id">
        <div class="accountDateContainer">
          <p class="account">{{post.account}}</p>
          <p class="date">{{post.postDate}}</p>
        </div>
        <div class="postText">
          <h3>{{post.PostText}}</h3>
        </div>
           <div v-if="post.picInfo !== null && post.picInfo !== undefined">
                <img class="postPic" :src="post.picInfo">
            </div>
      </div>
      <p>Check out your feed</p>
    </div>
  </div>
      </template>


      <script setup>
      import {computed} from "vue";
      import { useStore } from "vuex";

      const store = useStore();
      const postList = computed(() => store.state.postList);
      </script>


      <style scoped>

      #Container {
        height: 100%;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .postCompo {
        background: #D4C4CB;
        padding: 5px;
        min-height: 75vh;
        margin-bottom:20px;
        border-radius: 1rem;
        /*for responsiveness*/
        width: 80%;
        max-width: 1000px;
        min-width: 320px;
        /*Container properties*/
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column-reverse;
      }

      .post {
        background: #FFEFEB;
        margin: 5px;
        min-height: 10vh;
        /*for responsiveness*/
        width: 90%;
        max-width: 900px;
        min-width: 220px;
        display: flex;
        flex-direction: column;
      }

      .accountDateContainer {
        display: flex;
      }

      .accountDateContainer p {
        margin-top: 5px;
        font-size: 20px;
      }

      .date {
        margin-left: auto;
        margin-right: 10px;
      }

      .account {
        margin-left: 10px;
      }

      .postText {
        display: flex;
        align-items: flex-start;
      }

      .postText h3 {
        margin-top: 0px;
        margin-left: 10px;
      }

      .postPic {
        height: auto;
        width: 60%;
        margin-bottom: 20px;
        border-radius: 1rem;
      }

      .postCompo div {
        border-radius: 1rem;
      }

      </style>