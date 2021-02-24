# Area Chart

An area chart is derived from a line chart, by marking the area between the X axis and the line plot. It is usually used to compare the areas under the curve for two or more different plots.

```vue
:lineOptions="{
    regionFill: 1 // default: 0
}"
```

::: demo 
```vue
<v-frappe-chart
    type="line"
    :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
    :data="[
        { name: 'Dataset 1', values: [18, 40, 30, 35, 8, 52, 17, -4] },
        { name: 'Dataset 2', values: [30, 50, -10, 15, 18, 32, 27, 14] }
    ]"
    :lineOptions="{
        regionFill: 1 // default: 0
    }"
/>
```
:::

## Plotting Trends

Line charts are great to show trends. One of the reasons they are interesting is because the data involved usually involves a large number of data points. For so many points, we'd really like to keep the plot as less detailed as we can, while also using the already present color to advantage. Let's see how we can change some properties of a default line chart can reduce clutter.

## Continuity

The X axis (often the time axis) is usually continuous. That means we can reduce the redundancy of rendering every X label by allowing for only a few periodic ones.

We can skip X labels by setting the `xIsSeries` property in `axisOptions` to `true`.

```vue
:axisOptions="{
    xIsSeries: true // default: false
}"
```

This results only some of the X ticks having a label.


::: demo 
```vue
<v-frappe-chart
    type="line"
    :height="180"
    :labels="[1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]"
    :data="[
        { values: [132.9,150.0,149.4,148.0,94.4,97.6,54.1,49.2,22.5,18.4,39.3,131.0,220.1,218.9,198.9,162.4,91.0,60.5,20.6,14.8,33.9,123.0,211.1,191.8,203.3,133.0,76.1,44.9,25.1,11.6,28.9,88.3,136.3,173.9,170.4,163.6,99.3,65.3,45.8,24.7,12.6,4.2,4.8,24.9,80.8,84.5,94.0,113.3,69.8,39.8] }
    ]"
    :axisOptions="{
        xIsSeries: true
    }"
/>
```
:::

The line plot in the above plot could still be simplified. For example, to maintain uniformity, we could opt out of showing the dots at all, with `hideDots`.

```vue
:lineOptions="{
    hideDots: 1  // default: 0
}"
```

::: demo 
```vue
<v-frappe-chart
    type="line"
    :height="180"
    :labels="[1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]"
    :data="[
        { values: [132.9,150.0,149.4,148.0,94.4,97.6,54.1,49.2,22.5,18.4,39.3,131.0,220.1,218.9,198.9,162.4,91.0,60.5,20.6,14.8,33.9,123.0,211.1,191.8,203.3,133.0,76.1,44.9,25.1,11.6,28.9,88.3,136.3,173.9,170.4,163.6,99.3,65.3,45.8,24.7,12.6,4.2,4.8,24.9,80.8,84.5,94.0,113.3,69.8,39.8] }
    ]"
    :axisOptions="{
        xIsSeries: true
    }"
    :lineOptions="{
        hideDots: 1
    }"
/>
```
:::

Or you could just choose to show only the dots instead.

```vue
:lineOptions="{
    hideLine: 1  // default: 0
}"
```

A subtle way to show gradation of values is to render a change in color with the magnitude of the values. The property that does this is called `heatline`.

```vue
:lineOptions="{
    heatline: 1  // default: 0
}"
```

::: demo 
```vue
<v-frappe-chart
    type="line"
    :height="180"
    :labels="[1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]"
    :data="[
        { values: [132.9,150.0,149.4,148.0,94.4,97.6,54.1,49.2,22.5,18.4,39.3,131.0,220.1,218.9,198.9,162.4,91.0,60.5,20.6,14.8,33.9,123.0,211.1,191.8,203.3,133.0,76.1,44.9,25.1,11.6,28.9,88.3,136.3,173.9,170.4,163.6,99.3,65.3,45.8,24.7,12.6,4.2,4.8,24.9,80.8,84.5,94.0,113.3,69.8,39.8] }
    ]"
    :axisOptions="{
        xIsSeries: true
    }"
    :lineOptions="{
        hideDots: 1,
        heatline: 1
    }"
/>
```
:::


Next up, we'll start to annotate the data in charts.