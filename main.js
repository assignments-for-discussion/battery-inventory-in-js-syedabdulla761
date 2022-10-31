const assert = require('assert');

function countBatteriesByUsage(cycles) {
  cycles.sort(function(a,b){return a-b});           //sorting so it can be applied also for an unsorted given input
    let count={                                     //declaring and initializing an object count
        lowCount:0,
        mediumCount:0,
        highCount:0
    };
    cycles.map(a=>a<410?count["lowCount"]++:        //increments the property values of the object based on input elements of the given array 
    (410<a && a<950)?count["mediumCount"]++:
    count["highCount"]++);
  return count;                                     //returns the object
}

function testBucketingByNumberOfCycles() {
  console.log('Counting batteries by usage cycles...')
  counts = countBatteriesByUsage([100, 300, 500, 600, 900, 1000]);
  assert(counts["lowCount"] == 2);
  assert(counts["mediumCount"] == 3);
  assert(counts["highCount"] == 1);
  console.log("Done counting :)");
}

testBucketingByNumberOfCycles();
