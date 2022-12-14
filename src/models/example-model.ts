export default interface Example {
    complete: Complete[]
    tiny: Tiny[]
  }
  
  interface Complete {
      firstName: string;
      lastName: string;
      innovation: string;
      year: number;
  }
  
  interface Tiny {
      "name": string, 
      invented: string,
      year: number,
  }
  
  let myJson: Example = {
    complete: [
      {
        firstName: "Blaise",
        lastName: "Pascal",
        innovation: "invented the mechanical calculator",
        year: 1645,
      },
      {
        firstName: "Ada",
        lastName: "Lovelace",
        innovation: "published the first computer programs",
        year: 1843,
      },
      {
        firstName: "Charles",
        lastName: "Babbage",
        innovation: "designed first mechanical computer",
        year: 1837,
      },
      {
        firstName: "Max",
        lastName: "Newman",
        innovation: "Colossus broke enigma code using vacuum tubes",
        year: 1944,
      },
      {
        firstName: "Tommy",
        lastName: "Flowers",
        innovation: "Colossus broke enigma code using vacuum tubes",
        year: 1944,
      },
      {
        firstName: "John",
        lastName: "von Neumann",
        innovation:
          "published paper on EDVAC which detailed what is now called the von Neumann architecture",
        year: 1945,
      },
      {
        firstName: "J. Presper",
        lastName: "Eckert",
        innovation: "UNIVAC first general-purpose computer for commercial use",
        year: 1949,
      },
      {
        firstName: "John",
        lastName: "Mauchly",
        innovation: "UNIVAC first general-purpose computer for commercial use",
        year: 1949,
      },
      {
        firstName: "Tim",
        lastName: "Berners-Lee",
        innovation: 'invented the "web": HTML & HTTP',
        year: 1993,
      },
      {
        firstName: "James",
        lastName: "Gosling",
        innovation: "invented Java",
        year: 1995,
      },
      {
        firstName: "Brendan",
        lastName: "Eich",
        innovation: "invented JavaScript",
        year: 1995,
      },
      {
        firstName: "Anders",
        lastName: "Hejlsberg",
        innovation: "invented C#",
        year: 2000,
      },
      {
        firstName: "John",
        lastName: "Resig",
        innovation: "invented jQuery",
        year: 2006,
      },
      {
        firstName: "Eliot",
        lastName: "Horowitz",
        innovation: "invented MongoDB",
        year: 2007,
      },
      {
        firstName: "Dwight",
        lastName: "Merriman",
        innovation: "invented MongoDB",
        year: 2007,
      },
      {
        firstName: "Steve",
        lastName: "Wozniak",
        innovation: "developed the Apple I, co-founded Apple",
        year: 1976,
      },
      {
        firstName: "Grace",
        lastName: "Hopper",
        innovation: 'invented the first compiler; coined term "debugging"',
        year: 1944,
      },
      {
        firstName: "Dorothy",
        lastName: "Vaughan",
        innovation:
          "as a black woman, expert FORTRAN programmer in leadership at NASA",
        year: 1958,
      },
      {
        firstName: "William",
        lastName: "Shockley",
        innovation: "invented transistor w/ Bell Labs team",
        year: 1947,
      },
      {
        firstName: "Misko",
        lastName: "Hevery",
        innovation: "invented AngularJS",
        year: 2009,
      },
      {
        firstName: "Adam",
        lastName: "Abrons",
        innovation: "invented AngularJS",
        year: 2009,
      },
      {
        firstName: "Ryan",
        lastName: "Dahl",
        innovation: "invented Node.js",
        year: 2009,
      },
      {
        firstName: "Edgar",
        lastName: "Codd",
        innovation: "invented relational database",
        year: 1970,
      },
      {
        firstName: "Donald",
        lastName: "Chamberlin",
        innovation: "developed SQL",
        year: 1979,
      },
      {
        firstName: "Raymond",
        lastName: "Boyce",
        innovation: "developed SQL",
        year: 1979,
      },
      {
        firstName: "Brian",
        lastName: "Kernighan",
        innovation: "invented C",
        year: 1978,
      },
      {
        firstName: "Dennis",
        lastName: "Ritchie",
        innovation: "invented C",
        year: 1978,
      },
      {
        firstName: "Bjarne",
        lastName: "Stroustrup",
        innovation: "invented C++",
        year: 1985,
      },
      {
        firstName: "Jordan",
        lastName: "Walke",
        innovation: "invented React",
        year: 2013,
      },
    ],
    tiny: [
      { name: "Charles Babbage", invented: "mechanical computer", year: 1837 },
      { name: "Ada Lovelace", invented: "programming", year: 1843 },
      { name: "John von Neumann", invented: "modern computer", year: 1945 },
      { name: "William Shockley", invented: "transistor", year: 1947 },
      {
        name: 'Edgar "Ted" Codd',
        invented: "relational (SQL) database",
        year: 1970,
      },
      { name: "James Gosling", invented: "Java", year: 1995 },
      { name: "Brendan Eich", invented: "JavaScript", year: 1995 },
      { name: "Anders Hejlsberg", invented: "C#", year: 2000 },
    ],
  };
  