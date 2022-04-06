const withReactSvg = require('next-react-svg')
const path = require('path')

const nextconfig = withReactSvg({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  include: path.resolve(__dirname, 'public/svg'),
  webpack(config, options) {
    return config
  },
});


// const svgconfig = withReactSvg({
//   include: path.resolve(__dirname, 'public/svg'),
//   webpack(config, options) {
//     return config
//   }
// })

module.exports = nextconfig;