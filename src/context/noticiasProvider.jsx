import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NoticiasContext = createContext()

const NoticiasProvider = ({ children }) => {

    const [categorias, setCategorias] = useState('general');
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina] = useState(1);
    const [totalNoticias, setTotalNoticias] = useState(0)

    useEffect(() => {
        const consultarApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categorias}&apikey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url)
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
            setPagina(1)

        }

        consultarApi()
    }, [categorias])

    useEffect(() => {
        const consultarApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categorias}&apikey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
        }
        consultarApi()
    }, [pagina])


    const handleChangeNotices = (e) => {
        setCategorias(e.target.value)
    }

    const handleChangePagination = (e, valor) =>{
        setPagina(valor)
    }

    return (
        <NoticiasContext.Provider value={{
            categorias, handleChangeNotices, noticias, pagina, totalNoticias, handleChangePagination
        }}>
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider,
}

export default NoticiasContext