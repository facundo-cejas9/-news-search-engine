import React from 'react'
import useNoticias from '../hooks/useNoticias'
import { Grid, Pagination, Stack, Typography } from '@mui/material'
import { Noticias } from './Noticias'

export const ListadoNoticias = () => {

    const { noticias, pagina, totalNoticias, handleChangePagination } = useNoticias()
    const totalPaginas = Math.ceil(totalNoticias / 20)

    return (
        <>
            <Typography textAlign='center' marginY={5} variant='h3' component='h2' >
                Últimas Noticias
            </Typography>

            <Grid container justifyContent='center' spacing={5} padding={1} >
                {noticias.map((noticia) => (
                    <Noticias key={noticia.title} noticia={noticia} />
                ))}
            </Grid>
            <Stack x={{
                marginY: 10
            }}
                spacing={2}
                direction={'row'}
                justifyContent='center'
                alignItems='center'>
                <Pagination sx={{padding: 5 }} variant='outlined' onChange={handleChangePagination} color='primary' count={totalPaginas} page={pagina} />

            </Stack>

        </>
    )
}
