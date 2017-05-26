/**
 * 
 * 
 * @param {Array<{name: string,avgAlt : string}>} arr 
 * @returns {object[]}
 */
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  let result = [];

  for (let i = 0; i < arr.length; i++) {

    let orbit = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3) / GM));

    result.push({
      name: arr[i].name,
      orbitalPeriod: orbit
    });
  }

  return result;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
console.log(orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]));
