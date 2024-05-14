const findTheOldest = function (people) {
  const ages = people.map(
    (p) => (p.yearOfDeath ?? new Date().getFullYear()) - p.yearOfBirth
  );

  const sortedAges = [...ages].sort((a, b) => b - a);

  const oldestIndex = ages.indexOf(sortedAges[0]);

  return people[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
