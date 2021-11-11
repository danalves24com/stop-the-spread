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
    console.log( (n/(100 * (1 - s))), (Math.sqrt(a1*a2)))
    return  Math.pow(a1*a2, 1/((n/(100 * (1 - s)))));
  }
}






export default Recommendation;
