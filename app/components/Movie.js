import { Box, Button, Paper, Typography } from "@mui/material";

export default function Movie({ movie, removeMovie }) {
  return (
    <Paper
      width="100%"
      sx={{
        display: "flex",
        alignItems: "center",
        p: 1,
        mb: 1,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box flexGrow="1" component="span">
        {movie.title}
      </Box>
      <Box component="span" display="flex">
        {Array.from({ length: movie.rating }).map((_, index) => (
          <Typography variant="h6" key={index}>
            ⭐
          </Typography>
        ))}
      </Box>
      <Button
        variant="text"
        onClick={() => {
          removeMovie(movie.id);
        }}
      >
        ❌
      </Button>
    </Paper>
  );
}
