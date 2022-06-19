# Heatmap

The heatmap is a representation of day-wise data (similar to the GitHub Contribution Graph). It spaces out data values linearly, across 5 levels (zero data kept exclusive).

In this case, our chart has four parts,

```vue
<v-frappe-chart
  type="heatmap"
  :data="{
    '1461744959': 20,
    '1463673055': 113,
    '1476892421': 57,
  }"
  :start="startDate"
  :end="endDate"
/>
```

:::demo

```vue
<v-frappe-chart
  title="Monthly Distribution"
  type="heatmap"
  :height="180"
  :data="{
    '1461744959': 20,
    '1463673055': 113,
    '1476892421': 57,
  }"
  :start="new Date('January 01, 2016 00:00:00')"
  :end="new Date('September 01, 2016 00:00:00')"
/>
```

:::

If you wish you can configure the radius of heat squares using,

```vue
:radius="2" // default 0
```

:::demo

```vue
<template>
  <v-frappe-chart
    title="Monthly Distribution"
    type="heatmap"
    :data="{
      '1461744959': 20,
      '1463673055': 113,
      '1476892421': 57,
    }"
    :height="180"
    :radius="radius"
    :start="new Date('January 01, 2016 00:00:00')"
    :end="new Date('September 01, 2016 00:00:00')"
  />
  <input type="range" v-model="radius" step="1" min="1" max="6" />
  <br />
  {{ radius }} radius
</template>
<script>
export default {
  data() {
    return {
      radius: 6,
    }
  },
}
</script>
```

:::

Setting `discreteDomains` to `0` allows for a continous distribution of heat squares (as on GitHub), rather than showing the month-wise separation. A different set of colors can also be specified.

:::demo

```vue
<template>
  <v-frappe-chart
    title="Monthly Distribution"
    type="heatmap"
    :data="{
      '1461744959': 20,
      '1463673055': 113,
      '1476892421': 57,
    }"
    :colors="['#ebedf0', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e']"
    :height="180"
    :start="new Date('January 01, 2016 00:00:00')"
    :end="new Date('November 01, 2016 00:00:00')"
    :discrete-domains="0"
  />
</template>
```

:::
