// .vuepress/config.js
module.exports = {
  base: '/vue-frappe-chart/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/carterbourette/vue-frappe-chart' }
    ],
    sidebar: [
      ['/', 'Quick Start'],
      ['/package/', 'This Package'],
      // ['/axis-charts/', 'Axis Chart'],
      // ['/area-and-trends/', 'Area and Trends']
    ]
  },
  plugins: ['demo-container']
}