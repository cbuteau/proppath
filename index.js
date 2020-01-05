
function proppath(rootObject, proppath) {
  var chunks = proppath.split('.');
  var result = rootObject;
  for (var i = 0; i < chunks.length; i++){
    var chunk = chunks[i];
    var result = result[chunk];
  }

  return result;
}

function invoke(rootObject, proppath, arguments) {
  var func = proppath(rootObject, proppath);
  func.apply(arguments);
}

var exposed = {
  proppath: proppath,
  invoke: invoke
};

if (typeof define === 'function' && define.amd) {
  define(function() {
    return exposed;
  });
} else if (typeof exports === 'object') {
  module.exports = exposed;
} else {
  window.tc = exposed;
}
