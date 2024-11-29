import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const CarouselWrapper = styled.section`
  padding: 60px 20px;
  background-color: #f4f4f4;
  text-align: center;
  height: 100vh;
`;

const CarouselTitle = styled.h2`
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CarouselDescription = styled.p`
  color: gray;
  margin-bottom: 50px;
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselItem = styled.div`
  background-color: #f0f0f0;
  border-radius: 20px;
  margin: 0 10px;
  padding: 20px;
  min-width: 220px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const CarouselItemImage = styled.img`
  width: 100%;
  border-radius: 20px;
  background-color: lightgray;
`;

const CarouselItemTitle = styled.p`
  font-weight: bold;
  margin-top: 15px;
`;

const CarouselItemLocation = styled.span`
  display: block;
  font-size: 0.9em;
  color: gray;
  margin: 5px 0;
`;

const CustomizeButton = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  background-color: white;
  border: 2px solid black;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const ApartmentsCarousel = () => {
  const router =useRouter();

  const handleClick=()=>{
    router.push('/selecaoimoveis');
  };

  return( 
  <CarouselWrapper id="apartamentos">
    <CarouselTitle>Decore seu imóvel</CarouselTitle>
    <CarouselDescription>Lorem ipsum dolor sit amet...</CarouselDescription>
    <CarouselContainer>
      <CarouselItem>
        <CarouselItemImage src="/assets/APE.jpeg" alt="Produto 1" />
        <CarouselItemTitle>Be.in.Rio Arpoador</CarouselItemTitle>
        <CarouselItemLocation>Ipanema</CarouselItemLocation>
        <CustomizeButton onClick={handleClick}>PERSONALIZAR</CustomizeButton>
      </CarouselItem>
      <CarouselItem>
        <CarouselItemImage src="/assets/APE.jpeg" alt="Produto 2" />
        <CarouselItemTitle>Be.in.Rio Tonelero</CarouselItemTitle>
        <CarouselItemLocation>Copacabana</CarouselItemLocation>
        <CustomizeButton onClick={handleClick}>PERSONALIZAR</CustomizeButton>
      </CarouselItem>
      <CarouselItem>
        <CarouselItemImage src="/assets/APE.jpeg" alt="Produto 3" />
        <CarouselItemTitle>Niemeyer 360°</CarouselItemTitle>
        <CarouselItemLocation>São Conrado</CarouselItemLocation>
        <CustomizeButton onClick={handleClick}>PERSONALIZAR</CustomizeButton>
      </CarouselItem>
      <CarouselItem>
        <CarouselItemImage src="/assets/APE.jpeg" alt="Produto 4" />
        <CarouselItemTitle>Sal</CarouselItemTitle>
        <CarouselItemLocation>Ipanema</CarouselItemLocation>
        <CustomizeButton onClick={handleClick}>PERSONALIZAR</CustomizeButton>
      </CarouselItem>
    </CarouselContainer>
  </CarouselWrapper>
  );
};
