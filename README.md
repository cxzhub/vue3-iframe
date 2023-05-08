# vue3-iframe

Using Vue components inside iframes, commonly used for style isolation.

<p align="center">
  <img src="https://img.shields.io/badge/-Vue3-42b983?logo=vue.js&logoColor=white" />
  <img src="https://img.shields.io/badge/-Iframe-purple?logoColor=white" />
  <img src="https://img.shields.io/badge/-Sass-cc6699?logo=sass&logoColor=white" alt="Less">
  <img src="https://img.shields.io/badge/-ESLint-4b32c3?logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/-prettier-yellow?logo=prettier&logoColor=white" />
</p>

## Demo

```vue
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
```

## Preview

 <img src="https://github.com/cxzhub/vue3-iframe/blob/master/images/img1.png" />

# Props

| Props         | description                        | type     | default |
| ------------- | ---------------------------------- | -------- | ------- |
| width         | width                              | string   | 'auto'  |
| maxHeight     | max height                         | string   | 'auto'  |
| height        | height                             | string   | 'auto'  |
| inheritStyles | whether to inherit external styles | boolean  | false   |
| styles        | style array                        | string[] | []      |
