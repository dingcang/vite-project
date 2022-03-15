<script lang="ts">
// import NavHeader from "@/layout/components/NavHeader.vue";

export default {
  name: "LayoutIndex",
  // components: {
  //   NavHeader,
  // },
  // beforeCreate() {
  //   console.log("beforeCreate");
  // },
  // created() {
  //   console.log("created");
  // },
  // beforeMount() {
  //   console.log("beforeMount");
  // },
  // mounted() {
  //   console.log("mounted");
  // },
};
</script>
<template>
  <n-layout class="n-layout--absolute-positioned">
    <n-layout-header> header </n-layout-header>
    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;">sidebar</n-layout-sider>
      <n-layout-content>
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
    <n-layout-footer>footer</n-layout-footer>
  </n-layout>
</template>
<style lang="less">
.n-layout.n-layout--absolute-positioned {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
