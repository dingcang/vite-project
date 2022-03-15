<script lang="ts">
export default {
  beforeCreate() {
    console.log("nav beforeCreate");
  },
  created() {
    console.log("nav created");
  },
  beforeMount() {
    console.log("nav beforeMount");
  },
  mounted() {
    console.log("nav mounted");
  },
};
</script>
<template>header</template>
