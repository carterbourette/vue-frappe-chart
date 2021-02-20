import { Chart } from './components/Charts'

export {
  Chart as VFrappeChart
}

export default {
    install (Vue) {
        Vue.component('v-frappe-chart', Chart)
    }
}