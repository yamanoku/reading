module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif']
    },
    extend: {
      colors: {
        cyan: '#9cdbff'
      }
    },
    textColor: theme => ({
      primary: '#032f63',
      white: '#fff',
      gray: theme('colors.gray.500'),
      black: theme('colors.gray.900')
    }),
    backgroundColor: () => ({
      primary: '#032f63',
      gray: '#f9f9f9',
      white: '#fff'
    }),
    borderColor: () => ({
      default: '#cecece',
      primary: '#032f63',
      white: '#fff'
    }),
    fill: theme => ({
      primary: '#032f63',
      white: theme('colors.white')
    })
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
