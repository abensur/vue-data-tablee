module.exports = {
  parser: 'sugarss',
  plugins: {
    'cssnano': {},
    'postcss-nested': {},
    'autoprefixer': {
      browsers: ['ie > 10', 'last 2 versions']
    }
  }
}
