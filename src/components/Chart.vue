<template>
  <div :id="id" />
</template>
<script>
let CHART_ID = 0

// We need to map the attrs yRegions, yregions, and y-regions
// to the correct camle-cased prop name.
// https://github.com/vuejs/v2.vuejs.org/issues/1807
const camelCasedProps = [
  "barOptions",
  "axisOptions",
  "lineOptions",
  "axisOptions",
  "yRegions",
  "yMarkers",
  "tooltipOptions",
  "valuesOverPoints",
  "maxSlices",
  "barOptions",
  "isNavigable",
  "discreteDomains",
  "truncateLegends",
]

import { Chart } from "frappe-charts/dist/frappe-charts.min.esm"
export default {
  props: {
    type: String,
    data: [Array, Object],
    height: {
      type: Number,
      default: 250,
    },
  },
  data() {
    return {
      id: `frappe-chart-${CHART_ID++}`,
      dataAttrs: {},
      chartAttrs: {},
      last: undefined,
    }
  },
  computed: {
    applyToDataObject() {
      return ["labels", "start", "end", "yRegions", "yMarkers"]
    },
    dataObject() {
      const keyname = this.type === "heatmap" ? "dataPoints" : "datasets"
      return {
        [keyname]: this.data,
        ...this.dataAttrs,
      }
    },
    config() {
      return {
        ...this.chartAttrs,
        type: this.type,
        height: this.height,
      }
    },
  },
  watch: {
    $props: {
      deep: true,
      handler() {
        this.update()
      },
    },
    $attrs: {
      deep: true,
      handler() {
        this.parse()
        this.update()
      },
    },
  },
  mounted() {
    this.parse()
    this.init()
  },
  unmounted() {
    this.destroy()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    init() {
      if (this.chart) this.destroy()

      this.chart = new Chart(`#${this.id}`, {
        ...this.config,
        data: this.dataObject,
      })
      this.chart.parent.addEventListener("data-select", this.select)

      this.last = this.chart.rawChartArgs
      delete this.last.data
    },
    destroy() {
      this.chart.parent.removeEventListener("data-select", this.select)
      this.chart.destroy()
      this.chart = undefined
    },
    update() {
      for (const i in this.config)
        if (this.config[i] !== this.last[i]) return this.init()

      this.chart.update(this.dataObject)
    },
    parse() {
      const data = {},
        chart = {}
      for (const attr in this.$attrs) {
        // HACK: I'm looking to create an automatic boolean type
        // like you might define in the prop section `isBool: Boolean`
        const value = this.$attrs[attr] === "" ? true : this.$attrs[attr]

        const normalizedAttr =
          camelCasedProps.filter(
            (p) => p.toLowerCase() === attr.replace("-", "").toLowerCase()
          )[0] || attr

        if (this.applyToDataObject.includes(normalizedAttr)) {
          data[normalizedAttr] = value
        } else {
          chart[normalizedAttr] = value
        }
      }
      this.dataAttrs = data
      this.chartAttrs = chart
    },
    select(e) {
      this.$emit("data-select", {
        index: e.index,
        label: e.label,
        value: e.values.length === 1 ? e.values[0] : e.values,
        event: e,
      })
    },
  },
}
</script>
