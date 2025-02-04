'use strict';

var core = require('@actions/core');
var releaseNamer = require('@farts/release-namer');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var core__namespace = /*#__PURE__*/_interopNamespaceDefault(core);

try {
  const output = releaseNamer.generate();
  console.log(`Generated name: ${output}`);
  core__namespace.setOutput("name", output);
} catch (error) {
  const message = error instanceof Error ? error.message : "Something went terribly wrong.";
  core__namespace.setFailed(message);
}
