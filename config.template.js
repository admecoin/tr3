
/**
 * Global configuration object.
 */
const config = {
  'api': {
    'host': 'https://explorer.methuselahcoin.io',
    'port': '3000',
    'prefix': '/api',
    'timeout': '5s'
  },
  'coinMarketCap': {
    'api': 'https://graviex.net//api/v2/tickers/',
    'ticker': 'timbtc'
  },
  'db': {
    'host': '127.0.0.1',
    'port': '27017',
    'name': 'blockex',
    'user': 'blockexuser',
    'pass': 'Explorer!1'
  },
  'freegeoip': {
    'api': 'http://freegeoip.net/json/'
  },
  'rpc': {
    'host': '127.0.0.1',
    'port': '11334',
    'user': 'fve2fvnrpc',
    'pass': 'rpc2password',
    'timeout': 8000, // 8 seconds
  }
};

module.exports = config;
