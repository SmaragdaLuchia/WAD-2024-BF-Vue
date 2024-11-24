<template>
  <div class="compos">
    <HeaderCompo />
    <SignUpCompo />
    <FooterCompo />
  </div>
</template>

<script setup>
import SignUpCompo from "../components/SignUpCompo.vue";
</script>


<style scoped>
.compos {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

</style>
