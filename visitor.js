var recast = require("recast");
var types = recast.types;
var b = types.builders;

exports.visitFunction = function(path) {
  // Calling this.traverse(path) first makes for a post-order traversal.
  this.traverse(path);

  var node = path.value;
  if (node.async) {
    node.async = false;
  } else {
    return;
  }

  awaitVisitor.visit(path.get("body"));

  var resultExpr = b.callExpression(
    b.identifier("asyncFnRuntime"),
    [b.callExpression(
      b.functionExpression(
        null, // Anonymous.
        [], // No parameters.
        node.body, // Body without await.
        true, // Generator.
        node.expression
      ),
      [] // Immediately invoked.
    )]
  );

  if (node.expression) {
    node.body = resultExpr;
  } else {
    node.body = b.blockStatement([
      b.returnStatement(resultExpr)
    ]);
  }
};

var awaitVisitor = types.PathVisitor.fromMethodsObject({
  visitFunction: function(path) {
    return false; // Don't descend into nested function scopes.
  },

  visitAwaitExpression: function(path) {
    // Convert await expressions to yield expressions.
    return b.yieldExpression(path.value.argument, false);
  }
});
