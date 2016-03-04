Package.describe({
    name:"oscarcalvo:select2",
    summary: "Select2 is a jQuery based replacement for select boxes. Full.js select 2",
  version: "4.0.1",
  git: "https://github.com/oscarcalvo/meteor-select2.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
    api.use("jquery", "client");

    api.add_files([
        "lib/select2/dist/js/select2.full.js"
    ], "client", {bare: true});

    api.add_files([
        "lib/select2/dist/css/select2.css"
    ], "client");
});
