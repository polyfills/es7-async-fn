var recast = require("recast");
var types = recast.types;
var esprima = require("esprima-fb");
var visitor = require("./visitor");

// Make sure that this esprima can parse async functions.
esprima.parse("async function test() {}");

function compile(source, options) {
  options = options || {};

  var ast = recast.parse(source, {
    esprima: esprima,
    sourceFileName: options.sourceFileName
  });

  return recast.print(transform(ast), {
    sourceMapName: options.sourceMapName
  });
}

function transform(ast) {
  return recast.visit(ast, visitor);
}

exports.compile = compile;
exports.transform = transform;
