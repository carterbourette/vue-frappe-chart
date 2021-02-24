## Mixed Bar and Line Chart

As we have seen, chart can have multiple datasets. Each dataset can also have a different `chartType`, which if specified, should accompany the `type` property set to `axis-mixed`.

:::demo
```vue
<v-frappe-chart
    type="axis-mixed"
    :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
    :data="[
        { name: 'Dataset 1', chartType: 'bar', values: [18, 40, 30, 35, 8, 52, 17, -4] },
        { name: 'Dataset 2', chartType: 'line', values: [30, 50, -10, 15, 18, 32, 27, 14] }
    ]"
/>
```
:::

All the `lineOptions` and `barOptions` apply to mix and match datasets as well.

### Stacked Bar Chart

Unlike lines, bars have two ways to show multiple data point values: adjacent or stacked bars. Stacked bar charts are similar to area charts, being useful for comparisions of similar trends. The property stacked in barOptions renders a stacked bar chart instead of the default adjacent bars:

```vue
:barOptions="{
  stacked: 1    // default 0, i.e. adjacent
}"
```

:::demo
```vue
<v-frappe-chart
    type="bar"
    :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
    :data="[
        { name: 'Dataset 1', values: [18, 40, 30, 35, 8, 52, 17, -4] },
        { name: 'Dataset 2', values: [30, 50, -10, 15, 18, 32, 27, 14] }
    ]"
    :barOptions="{
      stacked: 1    // default 0, i.e. adjacent
    }"
/>
```
:::

In Aggregate Charts however, instead of being rendered individually, each data point in aggregated accross every dataset. We'll cover those next.
