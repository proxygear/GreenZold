'use strict';

const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    'cssnano': {},
    'tailwindcss': {
      config: path.join(__dirname, '../tailwind.config.js')
    },
  },
};
