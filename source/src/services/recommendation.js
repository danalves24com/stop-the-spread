var restrictionsOptions = [
  ["Testing antigen", 0.7],
  ["Testing pcr", 0.8],
  ["Facemasks", 0.5],
  ["Full vaccination", 0.8],
  ["Social Distance", 0.7]
]


class Recommendation {
  constructor(totalInfected, population) {
    this.infectedProportion = totalInfected/population;
  }
  compute(eventSize, restrictionCompletion, strictness)  {
    var n = eventSize,
        s = strictness,
        a1 = this.infectedProportion,
        a2 = restrictionCompletion<=0?Math.pow(10, -40):restrictionCompletion;
    var skew = - (1/15), n1 = 1-( (n<100? (n<10?2:10):100) /n);
    var mean = (n1 + (1-a2)) / 2;
    return (skew*(1-s)) + mean;
  }
}






export default Recommendation;
