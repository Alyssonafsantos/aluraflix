import styles from './Banner.module.css'
import video from '../../json/destaques.json'
import { useEffect, useState } from 'react'
import { FcPrevious } from "react-icons/fc"
import { FcNext } from "react-icons/fc"
import { Link } from 'react-router-dom'

function Banner() {

    const [indexAtual, setCurrentIndex] = useState(0)

    const sortearVideo = video.sort(() => Math.random() - 0.5)

    useEffect(() => {
        const intervalo = setInterval(() => {
            setCurrentIndex((indexAnterior) => (indexAnterior + 1) % sortearVideo.length);
        }, 5000)

        return () => clearInterval(intervalo)
    }, [sortearVideo])

    const nextItem = () => {
        setCurrentIndex((indexAnterior) => (indexAnterior + 1) % video.length);
    }

    const prevItem = () => {
        setCurrentIndex((indexAnterior) => (indexAnterior - 1 + video.length) % video.length);
    }

    const itemAtual = video[indexAtual];

    return (
        <section className={styles.container}>
            <div
                className={styles.fundo}
                style={{
                    backgroundImage: `url('${itemAtual.imagem}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%',
                    width: '100%',
                    maxHeight: 'auto',
                    borderColor: itemAtual.cor
                }}
            >
                <div className={styles.anterioreproximo}>
                    <FcPrevious onClick={prevItem} className={styles.icone} />
                    <FcNext onClick={nextItem} className={styles.icone} />
                </div>

                <div className={styles.item}>
                    <div>
                        <h1 style={{ backgroundColor: itemAtual.cor }} >{itemAtual.categoria}</h1>
                        <h2>{itemAtual.titulo}</h2>
                        <p>{itemAtual.descricao}</p>
                    </div>
                    <div className={styles.imagemwrapper} style={{ color: itemAtual.cor }}>
                        <img className={styles.imagem} alt={itemAtual.titulo} src={itemAtual.imagem} />
                        <Link to={`/${itemAtual.id}`}>
                        </Link>

                </div>
            </div>
        </div>
        </section >
    )
}

export default Banner