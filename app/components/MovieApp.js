"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import MovieForm from "./MovieForm";
import { useState } from "react";
import MovieList from "./MovieList";

export default function MovieApp() {
  // Save movies state
  const [movies, setMovies] = useState([]);

  /**
   * Function for adding a movie to the list
   * @param {Object} movie - The movie object to add
   */
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  /**
   * Function for removing a movie from the list
   * @param {Object} movieId - The id of the movie to remove
   */
  const removeMovie = (movieId) => {
    setMovies(movies.filter((movie) => movie.id !== movieId));
  };

  /**
   * Function for sorting movies by title in alphabetical order
   */
  const sortByAlphabet = () => {
    setMovies([...movies].sort((a, b) => a.title.localeCompare(b.title)));
  };

  /**
   * Function for sorting movies by rating in descending order
   */
  const sortByRating = () => {
    setMovies([...movies].sort((a, b) => b.rating - a.rating));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" gutterBottom>
        Min filmlista
      </Typography>
      <MovieForm addMovie={addMovie} boxProps={{ mb: 6 }} />
      <MovieList movies={movies} removeMovie={removeMovie} />
      {movies.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Button onClick={sortByAlphabet} variant="contained" sx={{ mr: 2 }}>
            Alfabetisk ordning
          </Button>
          <Button onClick={sortByRating} variant="contained">
            Betygsordning
          </Button>
        </Box>
      )}
    </Container>
  );
}
