import React, { useState } from 'react';
import { Select, MenuItem, InputLabel, Modal } from '@mui/material';
import {
    FullScreenModal,
    HexflixLogo,
    CloseButton,
    SelectorContainer,
    StyledSelectContainer,
    RandomizeButton,
    MovieDetailsContainer,
    MovieImage,
    MovieInfo
} from '../styles/GlobalStyle.ts';

const genres = [
    { value: '27', label: 'Horror' },
    { value: '53', label: 'Thriller' },
    { value: '9648', label: 'Mystery' },
];

const decades = [
    { value: '1980', label: '1980s' },
    { value: '1990', label: '1990s' },
    { value: '2000', label: '2000s' },
    { value: '2010', label: '2010s' },
];

interface Movie {
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
}

export const MovieSelector: React.FC = () => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedDecade, setSelectedDecade] = useState('');
    const [movie, setMovie] = useState<Movie | null>(null);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleRandomize = async () => {
        if (!selectedGenre || !selectedDecade) {
            alert('Please select both a genre and a decade');
            return;
        }

        const API_KEY = '8541354351a67d3b2fb1c8b0fafd3b51';
        const decadeStart = `${selectedDecade}-01-01`;
        const decadeEnd = `${parseInt(selectedDecade) + 9}-12-31`;

        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${selectedGenre}&primary_release_date.gte=${decadeStart}&primary_release_date.lte=${decadeEnd}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.results.length > 0) {
                const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
                const movieDetails: Movie = {
                    title: randomMovie.title,
                    overview: randomMovie.overview,
                    poster_path: randomMovie.poster_path,
                    release_date: randomMovie.release_date,
                };

                setMovie(movieDetails);
                handleOpen();
            } else {
                alert('No movies found for the selected genre and decade.');
            }
        } catch (error) {
            console.error('Error fetching movie data:', error);
            alert('Failed to fetch movie details.');
        }
    };

    return (
        <SelectorContainer>
            <HexflixLogo>FearFix</HexflixLogo>

            <StyledSelectContainer>
                <InputLabel>Genre</InputLabel>
                <Select
                    value={selectedGenre}
                    onChange={(e) => setSelectedGenre(e.target.value)}
                >
                    {genres.map((genre) => (
                        <MenuItem key={genre.value} value={genre.value}>
                            {genre.label}
                        </MenuItem>
                    ))}
                </Select>
            </StyledSelectContainer>

            <StyledSelectContainer>
                <InputLabel>Decade</InputLabel>
                <Select
                    value={selectedDecade}
                    onChange={(e) => setSelectedDecade(e.target.value)}
                >
                    {decades.map((decade) => (
                        <MenuItem key={decade.value} value={decade.value}>
                            {decade.label}
                        </MenuItem>
                    ))}
                </Select>
            </StyledSelectContainer>

            <RandomizeButton onClick={handleRandomize}>Fixify</RandomizeButton>

            <Modal open={open} onClose={handleClose}>
                <FullScreenModal
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <CloseButton onClick={handleClose}>&times;</CloseButton>
                    {movie && (
                        <MovieDetailsContainer>
                            <MovieImage
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <MovieInfo>
                                <h2>{movie.title}</h2>
                                <p>{movie.overview}</p>
                                <div className="detail">Release Date: {movie.release_date}</div>
                            </MovieInfo>
                        </MovieDetailsContainer>
                    )}
                </FullScreenModal>
            </Modal>
        </SelectorContainer>
    );
};
