
function proppath(rootObject, proppath) {
  var chunks = proppath.split('.');
  var result = rootObject;
  for (var i = 0; i < chunks.length; i++){
    var chunk = chunks[i];
    var result = result[chunk];
  }

  return result;
}

var exposed = {
  proppath: proppath
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
