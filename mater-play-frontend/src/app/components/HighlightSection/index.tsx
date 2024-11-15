import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMovie } from "../../@libs/types";
import { MovieService } from "../../services/movies-service";

function HighlightSection() {

    const params = useParams();

    const [movie, setMovie] = useState<IMovie>({} as IMovie);

    useEffect(() => {

        const movieId = (params.id) ? params.id : 'eab2923c-dc9f-4ded-bafe-604ed2c023ab';

        MovieService.getMoviesByid(movieId)
        .then(result => {
            if(result) setMovie(result)
        })
        .catch(error => {
            console.log(error)
        })
    
}, [params])
    return (
        <Box>
            <Container>
                <Stack
                direction="row">
                    <img src={`assets/${movie.poster}`}  />
                    <Stack
                    sx={{
                        justifyContent: 'center',
                        paddingLeft: '3rem'
                    }}>
                        <Typography
                        variant="h4">
                            {movie.title}
                        </Typography>
                        <Typography
                        variant="subtitle2">
                            <span
                            style={{borderWidth: '1px',
                                borderStyle: 'solid',
                                padding: '0.2rem',
                                marginRight: '0.3rem'
                            }}>{movie.ageRating}</span>
                            {movie.generies && movie.generies.map(genre => (genre.name)).join(', ')}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                             paddingTop: '2rem',
                            marginBottom: '0.5rem'
                        }}
                        >
              Sinopse
            </Typography>
                        <Typography
                        variant="subtitle1"
                        sx={{paddingTop: '2rem',
                            marginBottom: '0.5rem'
                        }}>
                            {movie.description}
                        </Typography>
                        <Stack
                            gap={1}
                            direction="row"
                            sx={{
                                paddingY: '1rem'
                            }}
                            >
                            <Button 
                                variant="outlined"
                            >
                                Assistir
                            </Button>
                            <Button
                                variant="outlined"
                            >
                                Detalhes
                            </Button>
                            </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default HighlightSection;