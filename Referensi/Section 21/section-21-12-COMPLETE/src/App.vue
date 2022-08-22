<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about/admin" v-if="showAbout">About</router-link>
  </div>
  <router-view />
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore(); // this.$store

    const showAbout = computed(() => store.getters.showAbout);

    setTimeout(() => {
      store.commit('setShowAbout', true);
    }, 3000);

    return {
      showAbout,
    };
  },
};
</script>
