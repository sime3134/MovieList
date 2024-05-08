import { Box, Typography } from "@mui/material";

export default function MovieList({ movies, removeMovie }) {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Inlagda filmer
      </Typography>
      <Box>
        {movies.map((movie) => (
          <Box key={movie.id} display="flex" alignItems="center">
            <Typography>{movie.title}</Typography>
            <Typography ml={2}>{movie.rating}</Typography>
            <button onClick={() => removeMovie(movie.id)}>Ta bort</button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
