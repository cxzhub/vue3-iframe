<template>
  <div class="outer">
    <button @click="onClick">outer btn</button>
    {{ count }}
    <Vue3Iframe
      class="border"
      :styles="['body{white-space: pre-wrap;overflow: hidden;margin:0}']"
    >
      <div style="padding: 20px">
        <button @click="onClick">inner btn</button>
        {{ count }}
      </div>
    </Vue3Iframe>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Vue3Iframe } from '../../src'

const count = ref(0)

const onClick = () => {
  count.value++
}
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
