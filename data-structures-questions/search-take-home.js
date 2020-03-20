/*
There are two string arrays; capitals and countries.

'capitals' is a sorted array with names of capital cities.
'countries' is an unodered array with names of countries corresponding to the capitals.

Write a function which takes two array of strings - capitals and countries  
 -and a city-name string as parameters. 
 The city-name is present in the capitals array.
 Find the country name corresponding to the city-name.
 
 The search should be efficient and with complexity < O(n)
 Hints - binary search
*/

function findCountry(capitals, countries, city) {
    // find the index of capital
    // the index of the country is same as that of the capital, which we found
    let capitalIndex = findCapital(capitals, 0, capitals.length, city);
  
    // Using the index, find the country
    if (capitalIndex > -1) {
      return countries[capitalIndex];
    }
    else {
      return null
    }
  }
  
  function findCapital(capitals, start, end, city) {
      if (end < start) {
        return -1
      }
  
      let halfwaypoint = Math.floor((end - start) / 2) + start
      if (city > capitals[halfwaypoint]) {
        return findCapital(capitals, halfwaypoint + 1, end, city)
      }
      else if (city < capitals[halfwaypoint]) {
        return findCapital(capitals, start, halfwaypoint - 1, city)
      }
      else if (city == capitals[halfwaypoint]) {
        return halfwaypoint
      }
      //tey want to know the index of the particular capital in the array of capitals
      
  }
  const capitals = ["Aden", "Algiers", "Baghdad", "Baku",
      "Berlin", "Rabat", "Tehran", "Tripoli", "Tunis"];
  const countries = ["Yemen", "Algeria", "Iraq", "Azerbaijan",
      "Germany", "Morocco", "Iran", "Libya", "Tunisia"];
  const country = findCountry(capitals, countries, "Rabat");
  