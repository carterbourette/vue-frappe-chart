# Aggregate Charts

Another family of charts, the aggreate charts accumulate the value at a data point across the multiple datasets.

### Pie Chart

Perhaps the most well-known representation of data slices are Pie charts:

::: demo

```vue
<v-frappe-chart
  type="pie"
  :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
  :data="[{ values: [18, 40, 30, 35, 8, 52, 17, -4] }]"
/>
```

:::

### Donut Charts

Donut chart is a variant for Pie charts:

::: demo

```vue
<v-frappe-chart
  type="donut"
  :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
  :data="[{ values: [18, 40, 30, 35, 8, 52, 17, -4] }]"
/>
```

:::

### Percentage Charts

Pies have received criticism for data perception; we are much better at parsing sizes in a single dimension rather than an area. That's why, the much leaner percentage chart can come in handy:

::: demo

```vue
<v-frappe-chart
  type="percentage"
  :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
  :data="[{ values: [18, 40, 30, 35, 8, 52, 17, -4] }]"
/>
```

:::

### Limiting Slices

When there are too many data values to show visually, it makes sense to bundle up the least of the values as a cumulated data point, rather than showing tiny slices. This can be done by defining the maximum number of slices to be shown.

```vue
:maxSlices="5"
```

::: demo

```vue
<v-frappe-chart
  type="pie"
  :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
  :data="[{ values: [18, 40, 30, 35, 8, 52, 17, -4] }]"
  :maxSlices="5"
/>
```

:::
