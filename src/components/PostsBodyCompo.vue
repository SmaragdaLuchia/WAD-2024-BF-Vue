<template>
  <div id="Container">
    <div class=postCompo>
      <p>You're all caught up!</p>
      <PostCompo v-for="post in postList" :key="post.id" :post="post" @like-post="likePost" />
      <p>Check out your feed</p>
    </div>
    <div>
      <button class="resetLikesButton" v-on:click="resetLikes">Reset likes</button>
    </div>
  </div>
</template>


<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import PostCompo from "@/components/PostCompo.vue";

const store = useStore();
const postList = computed(() => store.state.postList);
const resetLikes = () => {
  store.commit('resetLikes')
}

const likePost = (postId) => {
  store.commit('IncreaseLike', postId)
}
</script>


<style scoped>
#Container {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.postCompo {
  background: #D4C4CB;
  padding: 5px;
  min-height: 75vh;
  margin-bottom: 20px;
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



.resetLikesButton {
  background-color: #6A4D59;
  border-radius: 1rem;
  margin-bottom: 20px;

  font-size: 24px;
  width: 30vw;
  height: 10vh;

  min-width: 200px;
  min-height: 50px;
}
</style>
