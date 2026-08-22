/* AM MOVIES DATABASE
 *
 * Movies and series use the same flexible category system.
 * `genres` = what the title is.
 * `categories` = how you organise it. Add as many as you want.
 * Example: categories: ["USB", "Marvel", "Superhero", "Action"]
 *
 * For a movie, add it to `movies`.
 * For a series, add it to `series`.
 */

const categories = [
  "Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Horror", "Mystery", "Romance", "Sci-Fi", "Thriller", "War", "Western",
  "Superhero", "Marvel", "DC", "Star Wars", "Star Trek", "Disney", "Pixar", "DreamWorks", "Harry Potter", "James Bond", "Mission: Impossible", "Fast & Furious", "Jurassic Park", "Transformers",
  "The Lord of the Rings", "The Hobbit", "John Wick", "Rocky / Creed", "Alien", "Predator", "Planet of the Apes", "MonsterVerse", "Musicals", "Christmas", "British", "TV Movies", "Classics", "Kids", "Family Favourites", "USB"
];

/* MOVIE TEMPLATE — copy this object into `movies`
{
  title: "Movie Title",
  originalTitle: "",
  year: 2026,
  releaseDate: "2026-01-01",
  categories: ["USB", "Marvel"],
  genres: ["Action", "Sci-Fi"],
  status: "watch", // "watch" or "watched"
  runtime: "2h 15m",
  ageRating: "15",
  rating: "8.0/10",
  director: "Director Name",
  studio: "Studio Name",
  language: "English",
  country: "United Kingdom",
  franchise: "",
  collection: "",
  description: "Write a full description of the movie here.",
  cast: ["Actor One", "Actor Two", "Actor Three"],
  cover: "PASTE-COVER-IMAGE-URL-HERE",
  backdrop: "PASTE-BACKDROP-IMAGE-URL-HERE",
  trailer: "",
  notes: ""
}

SERIES TEMPLATE — copy this object into `series`
{
  title: "Series Title",
  originalTitle: "",
  year: 2026,
  releaseDate: "2026-01-01",
  categories: ["USB", "Drama"],
  genres: ["Drama", "Thriller"],
  status: "watch",
  seasons: 3,
  episodes: 24,
  episodeRuntime: "45–60m",
  ageRating: "15",
  rating: "8.5/10",
  creator: "Creator Name",
  network: "Network / Streaming Service",
  language: "English",
  country: "United Kingdom",
  franchise: "",
  collection: "",
  description: "Write a full description of the series here.",
  cast: ["Actor One", "Actor Two", "Actor Three"],
  cover: "PASTE-COVER-IMAGE-URL-HERE",
  backdrop: "PASTE-BACKDROP-IMAGE-URL-HERE",
  trailer: "",
  notes: ""
}
*/

const movies = [
  {
    title: "Batman Begins",
    originalTitle: "Batman Begins",
    year: 2005,
    releaseDate: "2005-06-17",
    categories: ["DC", "Superhero", "Action", "Crime", "Drama", "USB"],
    genres: ["Action", "Crime", "Drama", "Superhero"],
    status: "watched",
    runtime: "2h 20m",
    ageRating: "12A",
    rating: "8.2/10",
    director: "Christopher Nolan",
    studio: "Warner Bros.",
    language: "English",
    country: "United States",
    franchise: "The Dark Knight Trilogy",
    collection: "Batman",
    description: "After witnessing his parents' murder, Bruce Wayne travels the world and returns to Gotham determined to fight crime. He trains with the League of Shadows before becoming the masked vigilante known as Batman.",
    cast: ["Christian Bale", "Michael Caine", "Liam Neeson", "Gary Oldman", "Morgan Freeman"],
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3u3vTt_hAPPROUvh9Ob4mgb0reV-m_qDrXm1-3xLmQs4WbKtLytGTRtj_yBZP8HoKXXYEpg&s=10",
    backdrop: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8ZGJhAB7jIQB5RRssW_ORtezERoXKm5XM7yQQ7V55Z4eDzIKU3vWNLE&s=10",
    trailer: "https://www.youtube.com/watch?v=neY2xVmOfUM",
    notes: ""
  },
  {
    title: "Spiderman - Brand New Day",
    originalTitle: "Spiderman - Brand New Day",
    year: 2026,
    releaseDate: "2026-07-29",
    categories: ["Marvel", "Superhero", "Action", "Crime", "Drama"],
    genres: ["Action", "Crime", "Drama", "Superhero"],
    status: "watched",
    runtime: "2h 25m",
    ageRating: "12A",
    rating: "8.0/10",
    director: "Destin Daniel Cretton",
    studio: "Columbia Pictures",
    language: "English",
    country: "United States",
    franchise: "Tom Holland Spiderman",
    collection: "Spiderman",
    description: "A forgotten Peter Parker lives alone as a full-time Spider-Man until mounting pressure triggers a dangerous change and a powerful new enemy emerges.",
    cast: ["Tom Holland", "Zendaya", "Mark Ruffalo", "Joe Bernthal", "Sadie Sink", "Jacob Batalon"],
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1xib-t5_Z0pj8CgsUN5_eFeZnQ_Lxl7sW2OwSN-jpbHcpK-mnCIAbKNaCl6Dg_6Z9noyc&s=10",
    backdrop: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzW_Ec8U5Qj3HAu_yw1hPA4Sm9V5Jdy24pRfnI7f_ZMN55RQU2PL2C_Kf&s=10",
    trailer: "https://www.youtube.com/watch?v=8TZMtslA3UY",
    notes: ""
  }
];

const series = [
  // Add series here using the SERIES TEMPLATE above.
];

const carouselSlides = [
  { title: "Old Blue USB", text: "Old Blue USB with Black resedue on it.", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80" },
  { title: "Blue USB", text: "Add your favourite movies, franchises and physical collections to AM Movies.", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80" },
  { title: "Red USB", text: "Keep USB titles organised with the built-in category system.", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1200&q=80" },
  { title: "Black USB", text: "Add your own title, description and image for every carousel slide.", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80" },
  { title: "Old Black USB", text: "The carousel moves automatically and can contain as many slides as you like.", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80" }
];
