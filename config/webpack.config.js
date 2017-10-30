Object.defineProperty(exports, '__esModule', {
    value: true
})

const _autoprefixer = require('autoprefixer')

const _autoprefixer2 = _interopRequireDefault(_autoprefixer)

const _extractTextWebpackPlugin = require('extract-text-webpack-plugin')

const _extractTextWebpackPlugin2 = _interopRequireDefault(
    _extractTextWebpackPlugin
)

const _postcssFlexbugsFixes = require('postcss-flexbugs-fixes')

const _postcssFlexbugsFixes2 = _interopRequireDefault(_postcssFlexbugsFixes)

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj }
}

const _default = function _default(config, _ref) {
    const stage = _ref.stage

    config.module.rules.push(
        stage === 'dev'
            ? {
                  test: /\.css$/,
                  use: [
                      'style-loader',
                      {
                          loader: 'css-loader',
                          options: {
                              modules: true,
                              localIdentName:
                                  '[name]__[local]___[hash:base64:5]',
                              importLoaders: 1
                          }
                      },
                      {
                          loader: 'postcss-loader',
                          options: {
                              // Necessary for external CSS imports to work
                              // https://github.com/facebookincubator/create-react-app/issues/2677
                              ident: 'postcss',
                              plugins: function plugins() {
                                  return [
                                      _postcssFlexbugsFixes2.default,
                                      (0, _autoprefixer2.default)({
                                          browsers: [
                                              '>1%',
                                              'last 4 versions',
                                              'Firefox ESR',
                                              'not ie < 9'
                                          ],
                                          flexbox: 'no-2009'
                                      })
                                  ]
                              }
                          }
                      }
                  ]
              }
            : {
                  test: /\.css$/,
                  loader: _extractTextWebpackPlugin2.default.extract({
                      fallback: {
                          loader: 'style-loader',
                          options: {
                              hmr: false
                          }
                      },
                      use: [
                          {
                              loader: 'css-loader',
                              options: {
                                  modules: true,
                                  localIdentName:
                                      '[name]__[local]___[hash:base64:5]',
                                  importLoaders: 1,
                                  minimize: true,
                                  sourceMap: true
                              }
                          },
                          {
                              loader: 'postcss-loader',
                              options: {
                                  // Necessary for external CSS imports to work
                                  // https://github.com/facebookincubator/create-react-app/issues/2677
                                  ident: 'postcss',
                                  plugins: function plugins() {
                                      return [
                                          _postcssFlexbugsFixes2.default,
                                          (0, _autoprefixer2.default)({
                                              browsers: [
                                                  '>1%',
                                                  'last 4 versions',
                                                  'Firefox ESR',
                                                  'not ie < 9'
                                              ],
                                              flexbox: 'no-2009'
                                          })
                                      ]
                                  }
                              }
                          }
                      ]
                  })
              }
    )
    return config
}

exports.default = _default
const _temp = (function() {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return
    }

    __REACT_HOT_LOADER__.register(
        _default,
        'default',
        'src/plugins/withCssLoader.js'
    )
})()
