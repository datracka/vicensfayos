Package.describe({
  summary: "VicensFayos site basic theme",
  version: '0.1.0',
  name: "vicensfayos-theme-basic"
});

Package.onUse(function (api) {

  api.addFiles([
    'lib/client/css/screen.css'
  ], ['client']);

});