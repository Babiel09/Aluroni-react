import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './menu.module.scss';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Estilização:
const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
`;

const Li = styled.li`
  a {
    text-decoration: none;
    color: red; // Modificado para vermelho
    font-size: 1em;
    &:hover {
      color: blue; // Modificado para azul ao passar o mouse
    }
  }
`;




export default function ImagemSite(){
  const rotas= [{
   label: 'Inicio', //Definindo as rotas com objetos
    to: ''
  },
  {
    label: 'Recomendações',
    to: '/recomendacoes'
  },
  {
    label: 'Sobre nós',
    to: '/sobre'
  }
];

    return(
        <nav className={styles.menu}>
        <Logo/>
        <Ul>
          {rotas.map((rota, index)=>(
            <Li key={index}>
              <Link to={rota.to}>
                {rota.label}
              </Link>
            </Li>
          ))};
        </Ul>
      </nav>
    );
}