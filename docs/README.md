# Vue Frappe Charts

<p align="center">
    <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">
        <img width="150" src="https://vuejs.org/images/logo.png" alt="Vue logo" />
    </a>
    <a href="https://frappe.github.io/charts" target="_blank" rel="noopener noreferrer">
        <img src="https://raw.githubusercontent.com/frappe/design/master/logos/logo-2019/frappe-charts-logo.png" width="150" />
    </a>
</p>

[![npm version](https://badge.fury.io/js/vue-frappe-chart.svg)](https://badge.fury.io/js/vue-frappe-chart)

This is a simple vue wrapper for the [frappe/charts](https://github.com/frappe/charts) package.

## Getting Started

Install via `npm`:

```
npm install vue-frappe-chart
```

Globally import / initialize:

```js
import Vue from 'vue'
import Chart from 'vue-frappe-chart'

Vue.use(Chart)
```

or use the component directly:

```js
import { VFrappeChart } from 'vue-frappe-chart'

export default {
  components: {
    VFrappeChart
  }
}
```

In our template:

```vue
<v-frappe-chart
    type="bar"
    :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
    :data="[
        { values: [18, 40, 30, 35, 8, 52, 17, -4] }
    ]"
    :colors="['red']"
/>
```

## Resources
* [NPM vue-frappe-chart](https://www.npmjs.com/package/vue-frappe-chart)
* [vue-frappe-chart Documentation](https://carterbourette.ca/vue-frappe-chart/)
* [Frappe Charts](https://frappe.io/charts)
* [Vuejs](https://vuejs.org)
