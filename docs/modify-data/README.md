# Modify Data

In this section, we diverge from the Frappe Charts Documentation. This wrapper implements a watcher on the `data` prop. 

Any updates to the datasets will result in the underlying [`chart.update`](https://frappe.io/charts/docs/reference/api#update) function being fired.

Any updates to the chart object will result in the chart being automatically re-rendered.