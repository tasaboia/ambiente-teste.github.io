const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.importacoletiva.com.br/swagger/index.html',
      changeOrigin: true,
    })
  );
};