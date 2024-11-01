import { Box, Container, Stack, Typography } from "@mui/material";
import MovieCard from "../MovieCard";
import { useEffect, useState } from "react";
import { ICategory, IMovie } from "../../@libs/types";
import { MovieService } from "../../services/movies-service";

type SectionProps = {
    category: ICategory;
}


function Section({
    category
    }: SectionProps) {
    
    const [movies, setMovies] = useState<IMovie[]>([]);
    
    useEffect(() => {
        if(category.id) {
        MovieService.getByCategoryId(category.id)
        .then(result =>{
                setMovies(result)
            })  
        } 
    }, [])
        return (
        <Box>
            <Container>
                <Typography
                variant="h6"
                sx={{
                    fontWeight: 400,
                    paddingTop: '2rem'
                }}
        >
                {category.name}  
                </Typography>
                <Stack
                direction="row"
                 gap={0.5}
                 sx={{
                    overflowY: 'hidden',
                    whiteSpace: 'nowrap',
                    paddingY: '1rem'
                 }}
                >
                    {movies.map(item => (
                        <MovieCard key={item.id} poster={'assets/' + item.poster}/>
                    ))}

                    
                    <MovieCard poster="assets/house-of-dragons-poster.jpg"/>
                    <MovieCard poster="assets/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg"/>
                    <MovieCard poster="assets/7qOSKoOAPgemYhBwbJgBWcCxPWZ.jpg"/>
                    <MovieCard poster="assets/9h2KgGXSmWigNTn3kQdEFFngj9i.jpg"/>
                    <MovieCard poster="assets/cQLJT6hTXio0md94oBsSWADOECf.jpg"/>      
                </Stack>
            </Container>

        </Box>
    )
}

export default Section;
