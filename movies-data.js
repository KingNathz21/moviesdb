/*
 * MOVIESDB DATA — this is the only file you need to edit.
 *
 * Add a movie like this:
 * {
 *   title: "Spider-Man: Brand New Day",
 *   year: 2026,
 *   category: "Marvel",
 *   cover: "PASTE-COVER-IMAGE-URL-HERE",
 *   status: "watch" // use "watch" or "watched"
 * }
 *
 * Categories can be anything. The site automatically creates the category tabs.
 */

const categories = [
  "Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary",
  "Drama", "Family", "Fantasy", "Horror", "Mystery", "Romance", "Sci-Fi",
  "Thriller", "War", "Western", "Superhero", "Marvel", "DC", "Star Wars",
  "Star Trek", "Disney", "Pixar", "DreamWorks", "Harry Potter", "James Bond",
  "Mission: Impossible", "Fast & Furious", "Jurassic Park", "Transformers",
  "The Lord of the Rings", "The Hobbit", "John Wick", "Rocky / Creed", "Alien",
  "Predator", "Planet of the Apes", "MonsterVerse", "Musicals", "Christmas",
  "British", "TV Movies", "Classics", "Kids", "Family Favourites", "USB"
];

// Add your movies here.
const movies = [
  {
    title: "Batman Begins",
    year: 2005,
    category: "DC",
    cover: "https://image.tmdb.org/t/p/w500/4MpN4k2c1d1QY4XvQ7X3G4pX6XJ.jpg",
    status: "watched"
  }
];

// Bottom carousel — completely editable.
// Add/remove slides whenever you like. Use an image URL for each slide.
const carouselSlides = [
  {
    title: "Your next movie night",
    text: "Change this title and text to anything you want. You can also change the image.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Build your collection",
    text: "Add your favourite movies, franchises and physical collections to MoviesDB.",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "USB collection",
    text: "Keep USB movies separate with the built-in USB category.",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1200&q=80"
  }
];
