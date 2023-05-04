import type { ExtractPropTypes, PropType } from 'vue'

export const iframeProps = {
  width: {
    type: String,
    default: 'auto'
  },
  maxHeight: {
    type: String,
    default: 'auto'
  },
  height: {
    type: String,
    default: 'auto'
  },
  inheritStyles: Boolean, // 是否继承外面的样式
  styles: {
    type: Array as PropType<string[]>,
    default: () => []
  }
}

export type BCIframeProps = ExtractPropTypes<typeof iframeProps>
