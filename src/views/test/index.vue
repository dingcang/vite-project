<script setup lang="ts">
import { schedulerTest, subscriberTest, promiseTest } from "@/test";
</script>
<template>
  <n-button @click="schedulerTest">test scheduler</n-button>
  <n-button @click="subscriberTest">test subscriber</n-button>
  <n-button @click="promiseTest">test promise</n-button>
</template>
