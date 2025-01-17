import Formulario from 'componentes/Formulario'
import styles from './NovoVideo.module.css'
import { useEffect, useState } from 'react'
import categorias from '../../json/categorias.json'
import { api } from 'api'

function NovoVideo() {
    const [videos, setVideos] = useState([])
    const [erro, setErro] = useState(null)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(api)
          const data = await response.json()
          setVideos(data)
        } catch (error) {
          setErro('Ocorreu um erro ao carregar os vídeos.')
          console.error('Error fetching videos:', error)
        }
      }
      fetchData()
    }, [])
  
    const adicionarNovoVideo = (novoVideo) => {
      setVideos((prevVideos) => [...prevVideos, novoVideo])
    }
  
    return (
      <div>
        {erro && <p>{erro}</p>}
        <Formulario
          className={styles.sessaoFormulario}
          aoCadastrar={adicionarNovoVideo}
          categorias={categorias.map((categoria) => categoria.nome)}
        />
      </div>
    )
  }
  
  export default NovoVideo