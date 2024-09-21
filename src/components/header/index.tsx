import styles from '../paginaPadrao/pagina-padrao.module.scss';
import {Outlet} from 'react-router-dom';
export default function Header(){
    return(
        <>
        <header className={styles.header}>
        <div className={styles.header__text}>
          Comida boa é aqui!
        </div>
      </header>
      <div>
        <Outlet/>
      </div>
      </>
    );
}