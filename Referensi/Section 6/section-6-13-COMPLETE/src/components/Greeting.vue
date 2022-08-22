<template>
  <p v-if="age > 25">{{ msg }}</p>
  <p v-else>You must be 25 years or older to view this message</p>
</template>

<script>
export default {
  name: "Greeting",
  props: ['age'],
  data() {
    return {
      msg: "Hello world!",
    };
  },
};
</script>

<style scoped lang="scss">
$color: red;

p {
  color: $color;
}
</style>