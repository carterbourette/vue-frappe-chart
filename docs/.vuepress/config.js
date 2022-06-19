// .vuepress/config.js
module.exports = {
  base: "/vue-frappe-chart/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Github",
        link: "https://github.com/carterbourette/vue-frappe-chart",
      },
    ],
    sidebar: [
      ["/", "Quick Start"],
      ["/package/", "This Package"],
      ["/axis-charts/", "Axis Chart"],
      ["/area-and-trends/", "Area and Trends"],
      ["/annotations/", "Annotations"],
      ["/mixed-charts/", "Mixed Charts"],
      ["/aggregate-charts/", "Aggregate Charts"],
      ["/modify-data/", "Modify Data"],
      ["/navigation/", "Navigation"],
      ["/heatmap/", "Heatmap"],
      ["/configuration/", "Configuration"],
      ["/frappe/", "Frappe"],
    ],
  },
  plugins: ["demo-container"],
}
