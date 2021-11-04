var restrictionsOptions = [
  ["Testing antigen", 0.7],
  ["Testing pcr", 0.8],
  ["Facemasks", 0.5],
  ["Full vaccination", 0.8],
  ["Social Distance", 0.7]
]
var completedRestriction = 2;


function r(i, m) {
  return (Math.random() * (m-i)) + i;
}


var totalInfected = 81111, population = 10000000, infectedProp = totalInfected / population, infectedRisk = Math.cbrt(infectedProp);

for(var i = 0 ; i < 20 ;i += 1) {
  var eventSize = r(20, 500),
      restrictions = parseInt(r(0, restrictionsOptions.length)) / restrictionsOptions.length,
      eventDuration = r(30, 120);
  var eventThreat = infectedRisk + (1-restrictions) ; // how risky
  eventThreat /= 2;
  console.log(eventSize, restrictions, eventDuration, eventThreat);
}
