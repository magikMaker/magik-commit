'use strict';

var test = require('tape');
var magikCommit = require('./magik-commit');

test('it should have a createCommitMessageHook method', function(t){
    t.equal(typeof magikCommit.createCommitMessageHook, 'function');
    t.end();
});

test('it should have a removeCommitMessageHook method', function(t){
    t.equal(typeof magikCommit.removeCommitMessageHook, 'function');
    t.end();
});
