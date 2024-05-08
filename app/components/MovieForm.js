import {
  Box,
  Button,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function MovieForm({ addMovie, boxProps }) {
  const [rating, setRating] = useState("");
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState({});

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const validateMovie = (movie) => {
    let errors = {};
    let isValid = true;

    if (!movie.title) {
      errors.title = "Fyll i titel";
      isValid = false;
    }

    if (!movie.rating) {
      errors.rating = "Välj betyg";
      isValid = false;
    }

    setErrors(errors);

    if (!isValid) {
      alert("Fel i formuläret");
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.titleField.value;
    const rating = event.target.ratingField.value;

    const movie = {
      id: Date.now(),
      title,
      rating,
    };

    if (validateMovie(movie)) {
      addMovie(movie);
      setTitle("");
      setRating("");
      setErrors({});
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} {...boxProps}>
      <Typography mt={2} variant="h5">
        Lägg till en film
      </Typography>
      <hr />
      <InputLabel htmlFor="titleField">Titel *</InputLabel>
      <TextField
        onChange={handleTitleChange}
        sx={{ mb: 2 }}
        fullWidth
        id="titleField"
        name="titleField"
        value={title}
        error={errors.title}
        helperText={errors.title ?? ""}
      />
      <InputLabel id="ratingLabel" htmlFor="ratingField">
        Betyg *
      </InputLabel>
      <Select
        labelId="ratingLabel"
        id="ratingField"
        name="ratingField"
        value={rating}
        onChange={handleRatingChange}
        fullWidth
        error={errors.rating}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
      <FormHelperText sx={{ ml: 2 }} error={true}>
        {errors.rating ?? ""}
      </FormHelperText>
      <Button type="submit" sx={{ mt: 2 }} variant="contained" color="primary">
        Spara film
      </Button>
    </Box>
  );
}
