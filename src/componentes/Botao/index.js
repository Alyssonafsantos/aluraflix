import { Link, useLocation } from 'react-router-dom'
import styles from './Botao.module.css'

export const Botao = ({ url, children }) => {

    const paginaAtual = useLocation()
    let classeBtn = ''

    if (paginaAtual.pathname === '/') {
        if(url === './') {
            classeBtn = styles.botaoSelecionado
        } else { classeBtn = styles.botao }
    } 
    else if (paginaAtual.pathname === '/addvideo') {
            if(url === './addvideo') {
                classeBtn = styles.botaoSelecionado
            } else { classeBtn = styles.botao }
        } else {classeBtn = styles.botao}

    return (
        <Link to={url} className={classeBtn}>
            {children}
        </Link>
    )
}

export const BotaoFormulario = ({type, children}) => {
    const classeBtn = type === 'submit' ? styles.botaoSelecionado : styles.botao;
    return (
        <button className={classeBtn} type={type} >{children}</button> 
    )
}



     

