import Header from 'components/header';
import Cardapio from 'data/cardapio.json';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {  Prato  } from 'types/index';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Title = styled.h3`
  font-size: 32px;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const RecommendationsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;

const DishCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: calc(33% - 20px);
  max-width: 300px;
  margin: 10px;
  text-align: center;
`;

const DishImage = styled.img`
  width: 100%;
  height: auto;
`;

const DishName = styled.h4`
  font-size: 1.2em;
  margin: 10px 0;
  color: #4caf50;
`;

const DishDescription = styled.p`
  font-size: 0.9em;
  color: #666;
  padding: 0 10px;
`;

const PriceTag = styled.span`
  display: block;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
`;

const Button = styled.button`
  background-color: #d73b3b;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 10px;

  &:hover {
    background-color: #d73b3b;
  }
`;

export default function Inicio() {
  const navigate = useNavigate();
  let pratosRecomendo = [...Cardapio];
  pratosRecomendo = pratosRecomendo.sort(() => 0.5 - Math.random()).splice(0, 4);

  function redirecionarPrato(prato: Prato) {
    navigate(`/prato/${prato.id}`,
       { state: {prato},
        replace:true
      });
  }

  return (
    <>
    <Header/>
    <Section>
      <Title>Recomendações da cozinha</Title>
      <RecommendationsContainer>
        {pratosRecomendo.map((item) => (
          <DishCard key={item.id}>
            <DishImage src={item.photo} alt={item.title} />
            <DishName>{item.title}</DishName>
            <DishDescription>{item.description}</DishDescription>
            <PriceTag>R$ {item.price}</PriceTag>
            <Button
            onClick={() => redirecionarPrato(item)}
            >Ver mais</Button>
          </DishCard>
        ))};
      </RecommendationsContainer>
    </Section>
    </>
  );
}
