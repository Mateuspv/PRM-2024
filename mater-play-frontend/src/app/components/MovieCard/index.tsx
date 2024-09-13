import { Paper } from "@mui/material";

type MovieCardProps = {
    poster?: string;
}
function MovieCard({
    poster
}: MovieCardProps) {
    return (
        <Paper
        component="a"
        href="/1"
        sx={{
            minWidth: '10rem'
        }}>
            <img src={ poster}/>
        </Paper>
    )
}

export default MovieCard;
