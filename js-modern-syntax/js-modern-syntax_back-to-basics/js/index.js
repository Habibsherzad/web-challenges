/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

export function getNameAndCountry(city) {
  return [city.name, city.country];
}

export function getRelocatedCity(city1, city2) {
  city2 = city2 || { name: "Berlin", country: "Germany" };

  const country = getNameAndCountry(city2)[1];

  const relocatedCity = {};

  for (const key in city1) {
    /*
    💡 Hint
    The `Object.hasOwn()` method ensures that only the direct properties of `city1` are
    copied, excluding any inherited properties from the prototype chain.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn
    */

    if (Object.hasOwn(city1, key)) {
      relocatedCity[key] = city1[key];
    }
  }

  relocatedCity.country = country;
  return relocatedCity;
}
