# Using This Wrapper

The intention of this package is to provide a simple vue flavored api for the native js implementation of [frappe/charts](https://github.com/frappe/charts).

To learn more see [Frappe Charts Documentation](https://frappe.io/charts/docs).

### Advantages of Vue Frappe

The Vue Frappe wrapper provides:
* Vue flavored API
* Global registration
* Reduces object configuration nesting
* Automatic ID generation
* Provides unified API for underlying framework (i.e. passing `data` vs `datasets`/`dataPoints`)
* Native event handling

### Frappe Charts vs Vue Frappe

Frappe Charts splits the chart declaration into data configs (`labels` and `datasets`) and chart configs (`type`, `height`, `colors`, etc).

```js
data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        { values: [18, 40, 30, 35, 8, 52, 17, -4] }
    ]
}

new frappe.Chart( "#chart", {
    data: data,
    type: 'bar',
    height: 180,
    colors: ['red']
})
```

Vue Frappe accepts configs as props:
```vue
<v-frappe-chart
    type="bar"
    :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
    :data="[
        { values: [18, 40, 30, 35, 8, 52, 17, -4] }
    ]"
    :height="180"
    :colors="['red']"
/>
```


The following sections will mirror the [Frappe Charts Documentation](https://frappe.io/charts/docs).
