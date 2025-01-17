import { Link } from 'react-router-dom'
import styles from './Video.module.css'
import { MdDeleteForever, MdOutlineEdit, MdReadMore } from "react-icons/md"

function Video({ video, categoria, aoDeletar, aoEditar, aoVerVideo, aoTopo }) {

    return (
        <div className={styles.container} style={{ borderColor: categoria.cor }}>
            <div className={styles.imagem}>
                <img className={styles.imagemItem} src={video.imagem} alt={video.titulo} />
                <div onClick={() => aoVerVideo(video)} className={styles.divImg} style={{ color: categoria.cor }} ></div>
            </div>
            <div className={styles.opcoes}>
                <Link to={`/${video.id}`}  onClick={() => {aoTopo()}}  className={styles.item_opcao}>
                    <MdReadMore />
                    <p>Sobre</p>
                </Link>
                <div className={styles.item_opcao}
                    onClick={() => {aoEditar(video); aoTopo();}} 
                
                >
                    <MdOutlineEdit />
                    <p>Editar</p>
                </div>

                <div className={styles.item_opcao}
                    onClick={() => aoDeletar(video.id)}
                >
                    <MdDeleteForever />
                    <p>Deletar</p>
                </div>
            </div>
        </div>
    )
}

export default Video