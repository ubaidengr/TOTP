cordova.define("cordova-plugin-totpplugin.totpPlugin", function(require, exports, module) {
// Empty constructor
function TotpPlugin() {}
console.log('Received Event Before: totpplugin');
// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
TotpPlugin.prototype.generate = function(uri, successCallback, errorCallback) {
  var options = {};
  options.uri = uri;
console.log('Received Event Inside: totpplugin');
  cordova.exec(successCallback, errorCallback, 'TotpPlugin', 'generate', [options]);
}
console.log('Received Event After: totpplugin');
// Installation constructor that binds TotpPlugin to window
TotpPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
console.log('Received Event inside install: totpplugin');
  window.plugins.totpPlugin = new TotpPlugin();
  return window.plugins.totpPlugin;
};
cordova.addConstructor(TotpPlugin.install);
});
