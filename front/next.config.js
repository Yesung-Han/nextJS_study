// next.config.js 수정시 서버 재시작해야 적용됨
const withLess = require('@zeit/next-less');

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
});