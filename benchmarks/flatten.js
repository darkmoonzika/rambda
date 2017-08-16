const R = require("../rambda")
const Ramda = require("ramda")
const _ = require("lodash")
const Benchmark = require("benchmark")


const suite = new Benchmark.Suite();

suite.add("Rambda.flatten", () => {
  R.flatten([ 1, [ 2, [ 3, 4, 6 ] ] ])
})
.add("Ramda", () => {
  Ramda.flatten([ 1, [ 2, [ 3, 4, 6 ] ] ])
})
.add("Lodash", () => {
  _.flatten([ 1, [ 2, [ 3, 4, 6 ] ] ])
})

module.exports = suite;