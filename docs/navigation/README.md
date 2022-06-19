# Navigation

In order to analyse a data individually, it helps if the chart can activate a given point on the plot. This is where `isNavigable` comes in handy, which makes the chart interactive with arrow keys and highlights the current active data point.

```vue
<v-frappe-chart is-navigable />
```

Try and traverse this chart with arrow-keys.

::: demo

```vue
<v-frappe-chart
  is-navigable
  type="bar"
  :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
  :data="[{ values: [18, 40, 30, 35, 8, 52, 17, -4] }]"
  :colors="['red']"
/>
```

:::

Each time a data point is activated, a new data-select event is triggered that contains all the label and value information specific to the point. This can then be used to reflect in other parts of the webpage.

```vue
<v-frappe-chart is-navigable @data-select="myFunction" />
```

:::demo

```vue
<template>
  <v-frappe-chart
    is-navigable
    @data-select="myFunction"
    type="bar"
    :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
    :data="[{ values: [18, 40, 30, 35, 8, 52, 17, -4] }]"
  />
  <br />
  <pre>{{ event }}</pre>
</template>
<script>
export default {
  data() {
    return {
      event: undefined,
    }
  },
  methods: {
    myFunction(event) {
      this.event = event
    },
  },
}
</script>
```

:::
