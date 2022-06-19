# Annotations

Special values (like range points) on a chart can be annotated for quick comparisions. As they are among the components of a graph that can be updated, they are defined within the `data` property itself. There are two kinds of annotations that can be used to mark the vertical axis values: **markers** and **regions**.

### Markers

To highlight certain values on the Y axis, `yMarkers` can be set. They will shown as dashed lines on the graph.

```vue
:y-markers="[ { label: 'Threshold', value: 30, options: { labelPos: 'left' } }
]"
```

::: demo

```vue
<v-frappe-chart
  type="line"
  :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
  :data="[{ values: [18, 40, 30, 35, 8, 52, 17, -4] }]"
  :y-markers="[
    { label: 'Threshold', value: 30, options: { labelPos: 'left' } },
  ]"
/>
```

:::

### Regions

2D counterparts to markers, they have a `start` and `end` instead of value:

```vue
:y-regions="[{ label: 'Optimum Value', start: 10, end: 30, options: { labelPos:
'left' } }]"
```

::: demo

```vue
<v-frappe-chart
  type="line"
  :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
  :data="[{ values: [18, 40, 30, 35, 8, 52, 17, -4] }]"
  :y-regions="[
    {
      label: 'Optimum Value',
      start: 10,
      end: 30,
      options: { labelPos: 'left' },
    },
  ]"
/>
```

:::

## Tooltips

Frappe Charts are known for their awesome tooltips. What's more, they are also customizable for the format of the label and value displayed on them.

```vue
:tooltip-options="{ formatTooltipX: d => (d + '').toUpperCase(), formatTooltipY:
d => d + ' pts', }"
```

::: demo

```vue
<v-frappe-chart
  type="line"
  :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
  :data="[{ values: [18, 40, 30, 35, 8, 52, 17, -4] }]"
  :tooltip-options="{
    formatTooltipX: (d) => (d + '').toUpperCase(),
    formatTooltipY: (d) => d + ' pts',
  }"
/>
```

:::

For a non-web or static interface, where tooltips are absent, `valuesOverPoints` is a useful tweak to show value information at a glance.

::: demo

```vue
<v-frappe-chart
  values-over-points
  type="line"
  :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
  :data="[{ values: [18, 40, 30, 35, 8, 52, 17, -4] }]"
  :tooltip-options="{
    formatTooltipX: (d) => (d + '').toUpperCase(),
    formatTooltipY: (d) => d + ' pts',
  }"
/>
```

:::

Next up we'll look at perhaps one the more exciting parts in axis charts: **Mixed Charts**.
