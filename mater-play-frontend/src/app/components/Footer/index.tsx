import { Instagram, Facebook, YouTube } from "@mui/icons-material";
import { Container, IconButton, Stack, Typography } from "@mui/material";

function Footer() {
    return (
        <Container
        sx={{
            padding: '3rem'
        }}
        >

            <Typography 
            variant="overline"
            textAlign="center"
            component="p">
            
                Mater Play 2024 - Todos os direitos reservados
            </Typography>
            <Stack
            direction="row"
            justifyContent="center"
            >
                <IconButton>
                    <Instagram></Instagram>
                </IconButton>
                <IconButton>
                    <Facebook></Facebook>
                </IconButton>
                <IconButton>
                    <YouTube></YouTube>
                </IconButton>
            </Stack>

        </Container>

    )
}

export default Footer;
