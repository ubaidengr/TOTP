cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-totpplugin.totpPlugin",
      "file": "plugins/cordova-plugin-totpplugin/www/totpplugin.js",
      "pluginId": "cordova-plugin-totpplugin",
      "clobbers": [
        "window.plugins.totpPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-add-swift-support": "1.7.2",
    "cordova-plugin-totpplugin": "0.0.1"
  };
});