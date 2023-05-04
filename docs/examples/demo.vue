<template>
  <div class="outer">
    outer
    <Vue3Iframe
      class="border"
      :styles="['body{white-space: pre-wrap;overflow: hidden;margin:0}']"
    >
      <div style="padding: 20px">inner</div>
    </Vue3Iframe>
  </div>
</template>

<script setup lang="ts">
import { Vue3Iframe } from '../../src'
</script>

<style lang="scss" scoped>
.outer {
  font-size: 20px;
  font-weight: bold;
}
.border {
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}
</style>
