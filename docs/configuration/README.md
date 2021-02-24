# Configuration

If you've been following the docs you'll notice all data and configurations are passed on to Frappe via `attrs` and `props`.

You can apply this pattern to any of the configurations found in the Frappe Charts Configuration docs [here](https://frappe.io/charts/docs/reference/configuration#data).

Like the `title` attribute.

```vue
title="My Awesome Chart"
```

::: demo 
```vue
<v-frappe-chart
    title="My Awesome Chart"
    type="line"
    :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
    :data="[
        { values: [18, 40, 30, 35, 8, 52, 17, -4] },
    ]"
/>
```
:::

### A note on using the underlying API

You will find the full API docs [here](https://frappe.io/charts/docs/reference/api).

You can utilize the `$ref` and `chart` attributes to call the underlying API. For example, let's call the export function:

:::demo
```vue
<template>
  <v-frappe-chart
    type="bar"
    ref="mychart"
    :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
    :data="[
        { values: [18, 40, 30, 35, 8, 52, 17, -4] }
    ]"  
  />  
  <input type="button" @click="myExport" value="Export" />
</template>
<script>
export default {
  methods: {
    myExport () {
        this.$refs.mychart.chart.export()
    }
  }
}
</script>
```
:::
