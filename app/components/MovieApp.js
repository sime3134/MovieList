"use client";

import { Container, Typography } from "@mui/material";
import MovieForm from "./MovieForm";
import { useState } from "react";
import MovieList from "./MovieList";

export default function MovieApp() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const removeMovie = (movieId) => {
    setMovies(movies.filter((movie) => movie.id !== movieId));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" gutterBottom>
        Min filmlista
      </Typography>
      <MovieForm addMovie={addMovie} boxProps={{ mb: 6 }} />
      <MovieList movies={movies} removeMovie={removeMovie} />
    </Container>
  );
}
