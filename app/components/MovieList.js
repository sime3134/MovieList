import { Box, Typography } from "@mui/material";
import Movie from "./Movie";

export default function MovieList({ movies, removeMovie }) {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Inlagda filmer
      </Typography>
      {movies.length === 0 && <Typography>Inga filmer inlagda än.</Typography>}
      <Box>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} removeMovie={removeMovie} />
        ))}
      </Box>
    </Box>
  );
}
