const path = require('path');

const BASE_PLUGINS = [
  require('postcss-import'),
  require('tailwindcss'),
  require('autoprefixer')
];

// class TailwindExtractor {
//   static extract(content) {
//     return content.match(/[A-z0-9-:\/]+/g) || []
//   }
// }


// const PROD_PLUGINS = [
//   require('postcss-purgecss')({
//     content: [
//       path.join(__dirname + '../source/**/*.html'),
//       path.join(__dirname + '../source/**/*.erb')
//     ],
//     extractors: [{
//       extractor: TailwindExtractor,
//       extensions: ['html', 'js', 'erb', 'html.erb']
//     }]
//   }),
//   require('cssnano')()
//];

module.exports = {
  plugins: BASE_PLUGINS
}
