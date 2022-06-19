import { Chart } from "./components"

export { Chart as VFrappeChart }

export default {
  install(Vue) {
    Vue.component("VFrappeChart", Chart)
  },
}
