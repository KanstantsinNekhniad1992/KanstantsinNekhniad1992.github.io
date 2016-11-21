import path from 'path';
import fs from 'fs';
import assert from 'assert';
import babel from 'babel-core';
import plugin from '../src';

function trim(str) {
  return str.replace(/^\s+|\s+$/, '');
}

describe('replace true in false', () => {
   let output,
	    expectedOutput,
	    testPath;

	testPath = __dirname + '/fixtures/'

	output = babel.transformFileSync(testPath + 'example.js', {
	    plugins: [plugin]
	});
	expectedOutput = fs.readFileSync(testPath + 'expected.js', 'utf-8');

	assert.equal(trim(output), trim(expectedOutput));
});
