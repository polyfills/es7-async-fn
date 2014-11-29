
var fs = require('fs');
var path = require('path');
var assert = require('assert');

var desync = require('..');

describe('Async-Function', function () {
  it('should rewrite', function () {
    var js = desync.compile(fixture('blah')).code;
    assert(~js.indexOf('asyncFnRuntime(function*'));
  })
})

function fixture(name) {
  return fs.readFileSync(path.join(__dirname, 'fixtures', name + '.js'), 'utf8');
}
