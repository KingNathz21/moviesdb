/* MOVIESDB MOVIE TEMPLATE
 * Fill in every field for each movie. `category` is your collection/storage category
 * (including USB), while `genres` contains the actual film genres.
 *
 * Required fields: title, year, category, genres, description, cover.
 * Optional fields can be left blank.
 */

const categories = [
  "Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Horror", "Mystery", "Romance", "Sci-Fi", "Thriller", "War", "Western",
  "Superhero", "Marvel", "DC", "Star Wars", "Star Trek", "Disney", "Pixar", "DreamWorks", "Harry Potter", "James Bond", "Mission: Impossible", "Fast & Furious", "Jurassic Park", "Transformers",
  "The Lord of the Rings", "The Hobbit", "John Wick", "Rocky / Creed", "Alien", "Predator", "Planet of the Apes", "MonsterVerse", "Musicals", "Christmas", "British", "TV Movies", "Classics", "Kids", "Family Favourites", "USB"
];

/* COPY THIS TEMPLATE FOR EVERY NEW MOVIE
{
  title: "Movie Title",
  originalTitle: "",
  year: 2026,
  releaseDate: "2026-01-01",
  category: "USB",                 // Your collection/storage category
  genres: ["Action", "Sci-Fi"],   // Actual movie genres
  status: "watch",                 // "watch" or "watched"
  format: "USB",                   // USB, Blu-ray, DVD, Digital, etc.
  runtime: "2h 15m",
  ageRating: "15",
  rating: "8.0/10",
  director: "Director Name",
  studio: "Studio Name",
  language: "English",
  country: "United Kingdom",
  franchise: "",
  collection: "",
  location: "USB 01",
  description: "Write a description of the movie here.",
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
    category: "USB",
    genres: ["Action", "Crime", "Drama", "Superhero"],
    status: "watched",
    format: "USB",
    runtime: "2h 20m",
    ageRating: "12A",
    rating: "8.2/10",
    director: "Christopher Nolan",
    studio: "Warner Bros.",
    language: "English",
    country: "United States",
    franchise: "The Dark Knight Trilogy",
    collection: "Batman",
    location: "USB 01",
    description: "After witnessing his parents' murder, Bruce Wayne travels the world and returns to Gotham determined to fight crime. He trains with the League of Shadows before becoming the masked vigilante known as Batman.",
    cast: ["Christian Bale", "Michael Caine", "Liam Neeson", "Gary Oldman", "Morgan Freeman"],
    cover: "https://image.tmdb.org/t/p/w500/1P5E4D7f3fQq8LqXwV4J6y7g8H9.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/2a1kY1K4z3V4J7g8H9Q0P1R2S3T.jpg",
    trailer: "",
    notes: "Tester movie — replace or remove when adding your own collection."
  }
];

const carouselSlides = [
  { title: "Your next movie night", text: "Change this title and text to anything you want. You can also change the image.", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80" },
  { title: "Build your collection", text: "Add your favourite movies, franchises and physical collections to MoviesDB.", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80" },
  { title: "USB collection", text: "Keep USB movies separate with the built-in USB category.", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1200&q=80" }
];
