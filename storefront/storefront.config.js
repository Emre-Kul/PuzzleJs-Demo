const fs = require('fs');
const path = require('path');

module.exports = {
  gateways: [
    {
      name: 'browsing-gateway',
      url: process.env.BROWSING_GW_URL || 'http://localhost:4445'
    },
    {
      name: 'user-gateway',
      url: process.env.USER_GW_URL || 'http://localhost:4446'
    }
  ],
  pages: [
    {
      html: fs.readFileSync(path.join(__dirname, './src/pages/home/home.html'), 'utf8'),
      url: "/"
    }
  ],
  port: process.env.PORT || 4444,
  dependencies: []
};
