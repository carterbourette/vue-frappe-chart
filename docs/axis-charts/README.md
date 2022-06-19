# Axis chart: What Is It?

An axis chart is generally a 2D rendition of data, where a set of values corresponds to every point in a dataset. That's why, data is the most important component for a chart. Rendering it doesn't require much more that that. Plug the data in with a type bar, with an optional color:

::: demo

```vue
<v-frappe-chart
  type="bar"
  :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
  :data="[{ values: [18, 40, 30, 35, 8, 52, 17, -4] }]"
  :colors="['red']"
/>
```

:::

And similarly, a `line` chart is data-wise homomorphic to a bar chart:

::: demo

```vue
<v-frappe-chart
  type="line"
  :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
  :data="[{ values: [18, 40, 30, 35, 8, 52, 17, -4] }]"
  :colors="['red']"
/>
```

:::

## Adding more datasets

A chart can have multiple datasets. In an axis chart, every dataset is represented individually.

::: demo

```vue
<v-frappe-chart
  type="line"
  :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
  :data="[
    { name: 'Dataset 1', values: [18, 40, 30, 35, 8, 52, 17, -4] },
    { name: 'Dataset 2', values: [30, 50, -10, 15, 18, 32, 27, 14] },
  ]"
/>
```

:::

Notice that this case demonstrates why the `colors` option is an array. We'll see more about it ahead.

## Responsiveness

Frappe Charts are responsive, as they rerender all the data in the current available container width. To demonstrate, let's take the example of setting the bar width for bar charts.

In order to set the bar width, instead of defining it and the space between the bars independently, we simply define the **ratio of the space** between bars to the bar width. The chart then adjusts the actual size proportional to the chart container.

```vue
:bar-options="{ spaceRatio: 0.2 // default: 1 }"
```

Try resizing the window to see the effect, with different ratio values.

:::demo

```vue
<template>
  <v-frappe-chart
    type="bar"
    :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
    :data="[{ values: [18, 40, 30, 35, 8, 52, 17, -4] }]"
    :bar-options="{
      spaceRatio: ratio, // default: 1
    }"
  />
  <input type="range" v-model="ratio" step="0.1" min="0.1" max="1" />
  <br />
  {{ ratio }} spaceRatio
</template>
<script>
export default {
  data() {
    return {
      ratio: 0.2,
    }
  },
}
</script>
```

:::

## More Tweaks

Axis lines define a chart presentation. By default they are long spanning lines, but to give prominence to data points, X and/or Y axes can also be short ticks:

```vue
:axis-options: { xAxisMode: 'tick' // default: 'span' },
```

Just like bar width, we can set the dot size on a line graph, with the dotSize property in lineOptions.

```vue
:line-options="{ dotSize: 8 // default: 4 }"
```

:::demo

```vue
<template>
  <v-frappe-chart
    type="line"
    :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
    :data="[
      { name: 'Dataset 1', values: [18, 40, 30, 35, 8, 52, 17, -4] },
      { name: 'Dataset 2', values: [30, 50, -10, 15, 18, 32, 27, 14] },
    ]"
    :line-options="{
      dotSize: ratio, // default: 4
    }"
  />
  <input type="range" v-model="ratio" step="1" min="1`" max="10" />
  <br />
  {{ ratio }} dotSize
</template>
<script>
export default {
  data() {
    return {
      ratio: 8,
    }
  },
}
</script>
```

:::

These were some of the basic toggles to a chart; there are quite a few line options to go with, particularly to create regions. We'll look at those in next section.
