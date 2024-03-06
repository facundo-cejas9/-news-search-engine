import { Card, CardContent, CardMedia, Grid, Typography, Link, CardActionArea, Button, CardActions } from '@mui/material'
import React from 'react'


export const Noticias = ({ noticia }) => {

    const { title, url, urlToImage, description } = noticia

    const { name } = noticia.source



    return (




        <Grid item justifyContent='center' xs={12} sm={6} md={4} lg={4}>
            <Card sx={{ maxWidth: 'auto', height: '100%' }}>
                {urlToImage && (
                    <CardMedia
                        component='img'
                        alt={`Imagen de la noticia ${title}`}
                        image={urlToImage}
                        height='250px'
                    />


                )}

                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                    <Typography mt={2} variant='body1' color='error'> {name} </Typography>
                    <Typography mt={2} variant='h5' component='div'> {title} </Typography>
                    <Typography mt={2} variant='body2'> {description} </Typography>

                </CardContent>

                <CardActions sx={{ textAlign: 'center' }}>
                    <Link href={url} target='_blank' variant='button' width={'100%'} textAlign={'center'} sx={{ textDecoration: 'none' }}>Leer noticia</Link>
                </CardActions>

            </Card>

        </Grid>

    )
}
