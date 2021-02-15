const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
    el: 'gr',
    'nb-NO': 'no'
  }

module.exports = {
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
        localeSubpaths
    }
}
