var path = require('path');
var expect = require('chai').expect;

var cube = require(path.join(__dirname, '..', './cube.js'));

describe('cube', function () {
  'use strict';

  it('exists', function () {
    expect(cube).to.be.a('function');

  });

  it('computes the cube of 4', function () {
    expect(cube(4)).to.equal(64)
  });

  it('computes the cube of 3', function () {
    expect(cube(3)).to.equal(27)
  });

  it('computes the cube of 2', function () {
    expect(cube(2)).to.equal(8)
  });

  it('computes the cube of 1', function () {
    expect(cube(1)).to.equal(1)
  });

  it('computes the cube of 0', function () {
    expect(cube(0)).to.equal(0)
  });
  // Add more assertions here
});
