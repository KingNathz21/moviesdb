/* MOVIESDB MOVIE TEMPLATE
 * Fill in every field for each movie.
 * `genres` contains the actual film genres.
 * `categories` contains one or more collection categories/tags such as USB, Marvel, DC, Christmas, etc.
 * A movie can have as many categories as you need.
 *
 * Required fields: title, year, categories, genres, description, cover.
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
  categories: ["USB", "Marvel"], // Add as many categories as you want
  genres: ["Action", "Sci-Fi"],    // Actual movie genres
  status: "watch",                 // "watch" or "watched"
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
    categories: ["USB", "DC", "Superhero", "Action", "Crime", "Drama"],
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
    location: "USB 01",
    description: "After witnessing his parents' murder, Bruce Wayne travels the world and returns to Gotham determined to fight crime. He trains with the League of Shadows before becoming the masked vigilante known as Batman.",
    cast: ["Christian Bale", "Michael Caine", "Liam Neeson", "Gary Oldman", "Morgan Freeman"],
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3u3vTt_hAPPROUvh9Ob4mgb0reV-m_qDrXm1-3xLmQs4WbKtLytGTRtj_yBZP8HoKXXYEpg&s=10",
    backdrop: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8ZGJhAB7jIQB5RRssW_ORtezERoXKm5XM7yQQ7V55Z4eDzIKU3vWNLE&s=10",
    trailer: "https://www.youtube.com/watch?v=neY2xVmOfUM",
    notes: ""
  }
];

const carouselSlides = [
  { title: "Old Blue USB", text: "Change this title and text to anything you want. You can also change the image.", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80" },
  { title: "Blue USB", text: "Add your favourite movies, franchises and physical collections to MoviesDB.", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80" },
  { title: "Red USB", text: "Keep USB movies separate with the built-in USB category.", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1200&q=80" },
  { title: "Black USB", text: "Keep USB movies separate with the built-in USB category.", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1200&q=80" },
  { title: "Old Black USB", text: "Keep USB movies separate with the built-in USB category.", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1200&q=80" }
];
