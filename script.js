//1
//a 
const mcuShows = [`Loki`, `Moon Knight`];
//b
const starWarsShows = [`The Mandalorian`, `The Book of Boba Fett`];
//c 
const disneyPlusShows = [...mcuShows, ...starWarsShows, `The Beatles: Get Back`];
//d 
console.log(disneyPlusShows);

//2
//a
const netflixMovies = {
  action: `Extraction`,
  crime: `The Irishman`
};
//b
const amazonPrimeMovies = {
  action: `The Tomorrow War`,
  drama: `One Night in Miami`
};
//c
const streamingMovies = {
  ...amazonPrimeMovies,
  ...netflixMovies,
  musical: `Hamilton`
};
//d 
console.log(streamingMovies);

//3
//a 
const disneyJunior = [`Mickey Mouse Clubhouse`, `Spidey and his Amazing Friends`];
//b 
const [mickey, spidey] = disneyJunior;
//c 
console.log(disneyJunior);
console.log(mickey, spidey);

//4
//a
const avengers = {
  warMachine: `James Rhodes`,
  theHulk: `Bruce Banner`
}
//b 
const {warMachine, theHulk} = avengers;
//c
console.log(warMachine, theHulk);
//d 
const moreAvengers = {
  blackWidow: `Natasha Romanoff`,
  hawkeye: `Clint Barton`,
  ironMan: `Tony Stark`
};
//e 
const {blackWidow: nat, ...others} = moreAvengers;
//f 
console.log(nat, others);

//BONUS 
const bonus = {
  first: [1, 2, 3],
  second: [4, 5, 6],
  third: [7, 8, 9]
};

//5
//a
const all = [
  ...bonus.first, 
  ...bonus.second, 
  ...bonus.third]
  ;
console.log(all);
//b 
const [one, two, three, four, five, six, seven, eight, nine] = all;
console.log(one, two, three, four, five, six, seven, eight, nine);