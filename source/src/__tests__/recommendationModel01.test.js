import Recommendation from '../services/recommendation'


test("evaluates accordingly", () => {
  var totalInfected = 81000, population = 10000000, eventSize = 965, restrictions = 0.5, s = 0.48
  var res = new Recommendation(totalInfected, population)
    .compute(eventSize, restrictions, s);
  expect(parseInt(res*100)).toEqual(74)
});
