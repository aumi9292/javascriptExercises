//given an array of objects, with each object representing release data about a single film, return a new array of objects that each contain the id and title of the film in the original arrays

//rules: only include film objects that have both a title and id in the final array of objects

//algorithm
// select only film objects from the array where both id and title are present as keys
// return a new array for all selected films that consists of objects with keys id and title and their values

let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

function processReleaseData(data) {
  let final = [];
  let filtered = data.filter(film => film.id && film.title);
  // filtered.forEach(film => {
  //   let simplified = {};
  //   simplified.title = film.title;
  //   simplified.id = film.id;
  //   final.push(simplified);
  // });
  // return final;
  return filtered.map(film => {
    return {id: film.id, title: film.title};
  });
}

console.log(processReleaseData(newReleases));

// should return:
[{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];