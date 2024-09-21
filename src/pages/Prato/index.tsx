import classNames from 'classnames';
import styles from './prato.module.scss';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CardapioApi from '../../data/cardapio.json';
import NotFound from 'pages/Not-found';
import Fundao from '../../assets/cardapio/header.png';
import Header from 'components/header';





export default function Prato(){
    const navigate = useNavigate();
    const {id} = useParams();//Pegando o parâmetro 'id' da minha API
    const prato:any = CardapioApi.find(item => item.id === Number(id));//Vou pegar todas as propriedades da A.P.I do prato pelo id delas
    console.log(id);
    if(!prato){
      return (<NotFound/>);
    }
    return(
        <>
        <Header/>
      <div className={styles.container}>
        <h1 className={styles.titulo}>
          {prato.title}
        </h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {prato.description}
          </p>
        </div>
        <div className={styles.tags}>
          <div className={classNames({
            [styles.tags__tipo]: true,
            [styles[`tags__tipo__${prato.category.label.toLowerCase()}`]]: true
          })}>
            {prato.category.label}
          </div>
          <div className={styles.tags__porcao}>
            {prato.size}g
          </div>
          <div className={styles.tags__qtdpessoas}>
            Serve {prato.serving} pessoa{prato.serving === 1 ? '' : 's'}
          </div>
          <div className={styles.tags__valor}>
            R$ {prato.price.toFixed(2)}
          </div>
        </div>
        <button 
      className={styles.voltar}
      onClick={()=> navigate('/recomendacoes')}
      >
        {'< Voltar'}
      </button>
      </div>
    </>
    );
}