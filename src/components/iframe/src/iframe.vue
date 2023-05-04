<template>
  <div class="vue3-iframe">
    <div
      :style="{ maxHeight: containerStyle.maxHeight }"
      v-show="$slots.default"
    >
      <iframe
        ref="iframeRef"
        class="vue3-iframe__body"
        :style="iframeStyle"
        :onload="onLoad"
      />
      <Teleport v-if="hasLoad" :to="iframeRef?.contentWindow?.document.body">
        <slot />
      </Teleport>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import { useElementSize } from '@vueuse/core'
import { iframeProps } from './iframe'

const props = defineProps(iframeProps)

const iframeRef = ref<HTMLIFrameElement>()
const hasLoad = ref(false)
const iframeBody = ref()
const { height: bodyHeight } = useElementSize(iframeBody)

const onLoad = () => {
  nextTick(() => {
    if (props.inheritStyles) {
      inheritStyles()
    }

    props.styles.forEach(el => {
      // @ts-expect-error 忽略报错
      insertStyle(iframeRef.value, el)
    })
    hasLoad.value = true
    nextTick(() => {
      iframeBody.value = iframeRef.value?.contentWindow?.document.body
    })
  })
}

const iframeStyle = computed(() => {
  const height =
    props.height === 'auto' ? `${bodyHeight.value}px` : props.height
  return {
    height
  }
})

const containerStyle = computed(() => {
  const width = props.width === 'auto' ? '100%' : props.width
  const height =
    props.height === 'auto' ? `${bodyHeight.value}px` : props.height
  return {
    width,
    height,
    maxHeight: props.maxHeight
  }
})

const inheritStyles = () => {
  const styles = Array.from(
    iframeRef.value?.contentWindow?.parent.document.querySelectorAll('style') ??
      []
  )
  styles.forEach((el: any) => {
    iframeRef.value?.contentDocument?.head.appendChild(el.cloneNode(true))
  })
}

const insertStyle = (target: HTMLIFrameElement, style: string) => {
  const styleEl = document.createElement('style')
  styleEl.innerHTML = style
  styleEl.type = 'text/css'
  target?.contentWindow?.document
    .getElementsByTagName('head')
    .item(0)
    ?.appendChild(styleEl)
  return styleEl
}
</script>
