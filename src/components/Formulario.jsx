import { FormControl, InputLabel, Select, MenuItem, Button, Box } from "@mui/material"
import useNoticias from "../hooks/useNoticias"

const categorys = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' },
]

    

export const Formulario = () => {

    const { categorias, handleChangeNotices } = useNoticias()

    return (
        <form>
            <FormControl fullWidth>
                <InputLabel> Categoría </InputLabel>
                <Select label='Categoría' onChange={ handleChangeNotices } value={ categorias }>
                    {
                        categorys.map(category => (
                            <MenuItem key={category.value}
                                value={category.value}
                            >
                                {category.label}
                            </MenuItem>
                        ))
                    }
                </Select>

                <Box sx={{ mt: 2 }}>
                    <Button fullWidth variant="contained">
                        Buscar noticias
                    </Button>
                </Box>




            </FormControl>
        </form>
    )
}
