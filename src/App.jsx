import { Container, Grid, Typography } from "@mui/material"
import { Formulario } from "./components/Formulario"
import { NoticiasProvider } from "./context/noticiasProvider"
import { ListadoNoticias } from "./components/ListadoNoticias"


function App() {


  return (
    <NoticiasProvider>
    <Container maxWidth="sm">
      <header>
        <Typography align="center" variant="h3" marginY={8} component="h1">
          Buscador de noticias
        </Typography>
      </header>

      <Grid container justifyContent='center' alignContent='center' direction='row' >
        <Grid item xs={12} md={12} >
          <Formulario />
        </Grid>
      </Grid>
    </Container>

    <ListadoNoticias />

    </NoticiasProvider>
  )
}

export default App
