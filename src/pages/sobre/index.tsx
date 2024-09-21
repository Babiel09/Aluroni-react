import casa from 'assets/casa.png';
import massa1 from 'assets/massa1.png';
import massa2 from 'assets/massa2.png';
import styled from 'styled-components';
import NossaCasa from '../../assets/nossa_casa.png';
import Header from 'components/header';

const imagensMassa= [massa1, massa2];


const Section = styled.section`
  padding: 20px;
  background-color: #f8f8f8;
`;

const Title = styled.h3`
  font-size: 2em;
  color: #333;
  text-align: center;
`;

const Address = styled.div`
  margin: 20px 0;
  text-align: center;
  font-size: 1.2em;
  color: #666;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Description = styled.p`
  font-size: 1.1em;
  color: #black;
  line-height: 1.6;
  margin: 20px 0;
  font-family: 'Arial', sans-serif; /* Ajuste a fonte conforme necessário */
`;

const ImageGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;

const GridItem = styled.div`
  flex: 1 1 calc(50% - 20px);
  max-width: calc(50% - 20px);
`;
const DivDescricao = styled.div`
`;




export default function Sobre(){
    return(
      <>
      <Header/>
        <Section>
        <Title>Nossa Casa</Title>
      <Address>
          <p>Rua Vergueiro, 3185</p> <br/><br/> <p>Vila Mariana - SP - Brasil</p>
      </Address>
      <ImageContainer>
      <Image src={casa} alt='Nossa casa'/>
      </ImageContainer>
      <DivDescricao>
      <Description>
      Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
      </Description>
      <Description>
      Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
      </Description>
      <Description>
      Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu prato, seja carne, massa ou salada!
      </Description>
        <ImageGrid>
        {imagensMassa.map((massa, index)=> 
        <GridItem key={index}>
             <Image src={massa} alt={massa}/>
        </GridItem>
        )};
      </ImageGrid>
      </DivDescricao>
      </Section>
      </>
    );
}