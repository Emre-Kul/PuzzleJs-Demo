const {GatewayConfigurator, Gateway} = require('puzzle-microfrontends');
const gatewayConfiguration = require('./gateway.config.js');

const gatewayConfigurator = new GatewayConfigurator();

gatewayConfigurator.config(gatewayConfiguration);

console.log(gatewayConfigurator);

const gateway = new Gateway(gatewayConfigurator);

gateway.init(() => {
  console.log(`Gateway ${gatewayConfiguration.name} is listening on port ${gatewayConfiguration.port}`)
});
